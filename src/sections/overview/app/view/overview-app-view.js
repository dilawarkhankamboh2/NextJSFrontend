'use client';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import { SeoIllustration } from 'src/assets/illustrations';
import { _appAuthors, _appRelated, _appFeatured, _appInvoices, _appInstalled } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';

import AppWidget from '../app-widget';
import AppWelcome from '../app-welcome';
import AppAnnouncements from '../app-announcements';
import UpcomingBirthdays from '../app-upcoming-birthdays';
import UpcomingAnniversaries from '../app-upcoming-anniversaries';
import AppQuickAccess from '../app-quick-access';
import AppUpcomingRetreats from '../app-upcoming-retreats';
import AppTopSellingProducts from '../app-top-selling-products';
import AppFeatured from '../app-featured';
import AppNewInvoice from '../app-new-invoice';
import AppTopAuthors from '../app-top-authors';
import AppTopRelated from '../app-top-related';
import AppAreaInstalled from '../app-area-installed';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentDownload from '../app-current-download';
import AppTopInstalledCountries from '../app-top-installed-countries';
import AnnouncementsData from '../AnnouncementsData';
import UpcomingBirthdaysData from '../UpcomingBirthdaysData';
import UpcomingAnniversariesData from '../UpcomingAnniversariesData';


// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <AppWelcome
            title={`Welcome back 👋 \n ${user?.displayName}`}
            description="Take a look at the Health & Wellness page's updated tiles and links for the month of May!"
            img={<SeoIllustration />}
            action={
              <Button variant="contained" color="primary">
                Go Now
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppAnnouncements list={AnnouncementsData} />
        </Grid>

        <Grid xs={12}>
          <AppQuickAccess />
        </Grid>

        <Grid xs={6}>
          <AppUpcomingRetreats />
        </Grid>

        <Grid xs={6}>
          <AppTopSellingProducts />
        </Grid>

           
        
        <Grid xs={6}>
          <UpcomingBirthdays
            title="Upcoming Birthdays"
            tableData={UpcomingBirthdaysData}
            tableLabels={[
              { id: 'BirthdayThumbnail', label: 'Name' },
              { id: 'BirthdayName' , label: 'Date' },
              { id: 'BirthdayDate' },
              { id: '' },
            ]}
          />
        </Grid>
        <Grid xs={6}>
          <UpcomingAnniversaries
            title="Upcoming Anniversaries"
            tableData={UpcomingAnniversariesData}
            tableLabels={[
              { id: 'AnniversaryThumbnail' && 'AnniversaryName', label: 'Name' },
              { id: 'AnniversaryYears', label: 'Years' },
              { id: 'AnniversaryDate', label: 'Date' },
              { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
