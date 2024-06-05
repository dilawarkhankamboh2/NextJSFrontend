import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { varFade, MotionContainer } from 'src/components/animate';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';
import './app-customstyle.css';


// ----------------------------------------------------------------------

export default function AppAnnouncements({ list, ...other }) {
  const carousel = useCarousel({
    speed: 800,
    autoplay: true,
    ...CarouselDots({
      sx: {
        color: 'primary.light',
      },
    }),
  });

  return (
    <Card {...other}>
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {list.map((app, index) => (
          <CarouselItem key={app.id} item={app} active={index === carousel.currentIndex} />
        ))}
      </Carousel>

      <CarouselArrows
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
        sx={{ bottom: 8, right: 8, position: 'absolute', color: 'common.white' }}
      />
    </Card>
  );
}

AppAnnouncements.propTypes = {
  list: PropTypes.checkPropTypes({}, {}, 'prop', 'AppAnnouncements'),
};

// ----------------------------------------------------------------------

function CarouselItem({ item, active }) {
  const theme = useTheme();

  const { AnnounStatus, AnnounDate, AnnounDesc } = item;


  return(
    <div className='app-announcements'>
      <h3>Company Announcements</h3>
      <span className='MuiBox-root css-1r7dlkq'>{AnnounStatus}</span>
      <span className='app-announcements-date'>{AnnounDate}</span>
      <p>{AnnounDesc}</p>
      <hr />
    </div>
  );
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.checkPropTypes({}, {}, 'prop', 'CarouselItem'),
};


