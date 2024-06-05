import Link from 'next/link';
import './app-customstyle.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// ----------------------------------------------------------------------

export default function AppQuickAccess() {

  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  //First image url
  {
    url:
      "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
  },
  {
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  //Second image url
  {
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
  },
  //Third image url
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
  },

  //Fourth image url

  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
  }
];

  return (
    <div className="Quick-access">
      <h3>Quick Access </h3>
      <Link href="https://asana.com" target="_blank">
          <div className="quick-access-wrap">
            <img
              src="https://kayadevelopmentserver.com/minimal-app-images/ic-asana.svg"
              alt="Logo1"
            />
            <a>
              <h4>Asana</h4>
            </a>
          </div>
        </Link>
        <Link
          href="https://online.adp.com/signin/v1/?APPID=WFNPortal&productId=80e309c3-7085-bae1-e053-3505430b5495&returnURL=https://workforcenow.adp.com/&callingAppId=WFN"
          target="_blank"
        >
          <div className="quick-access-wrap">
            <img
              src="https://kayadevelopmentserver.com/minimal-app-images/ic-ADP.svg"
              alt="Logo1"
            />
            <a>
              <h4>ADP</h4>
            </a>
          </div>
        </Link>
        <Link href="http://encephalon.bamboohr.com/" target="_blank">
          <div className="quick-access-wrap">
            <img
              src="https://kayadevelopmentserver.com/minimal-app-images/ic-Bamboo-HR.svg"
              alt="Logo1"
            />
            <a>
              <h4>Bamboo HR</h4>
            </a>
          </div>
        </Link>
        <Link href="http://encephalonfiles.egnyte.com/" target="_blank">
          <div className="quick-access-wrap">
            <img
              src="https://kayadevelopmentserver.com/minimal-app-images/ic-egnyte.svg"
              alt="Logo1"
            />
            <a>
              <h4>Egnyte</h4>
            </a>
          </div>
        </Link>
        <Link
          href="https://app.smartsheet.com/b/home?_ga=2.163596600.622201431.1646334041-436219555.1645138952"
          target="_blank"
        >
          <div className="quick-access-wrap">
            <img
              src="https://kayadevelopmentserver.com/minimal-app-images/ic-smartsheet.svg"
              alt="Logo1"
            />
            <a>
              <h4>Smartsheet</h4>
            </a>
          </div>
        </Link>
        <Link href="https://zoom.us/signin" target="_blank">
          <div className="quick-access-wrap">
            <img
              src="https://kayadevelopmentserver.com/minimal-app-images/ic-zoom.svg"
              alt="Logo1"
            />
            <a>
              <h4>Zoom</h4>
            </a>
          </div>
        </Link>
        <Link href="https://encephalonteam.slack.com/" target="_blank">
          <div className="quick-access-wrap">
            <img
              src="https://kayadevelopmentserver.com/minimal-app-images/ic-slack.svg"
              alt="Logo1"
            />
            <a>
              <h4>Slack</h4>
            </a>
          </div>
        </Link>
        <Link href="https://drjoedispenza.com/" target="_blank">
          <div className="quick-access-wrap">
            <img
              src="https://kayadevelopmentserver.com/minimal-app-images/ic-unlimited.svg"
              alt="Logo1"
            />
            <a>
              <h4>Unlimited</h4>
            </a>
          </div>
        </Link>
    </div>
  );
}
