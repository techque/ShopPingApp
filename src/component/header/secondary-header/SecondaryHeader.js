import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function SecondaryHeader() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      }
    ]
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style, 
          zIndex: 999,
          display: 'block', 
          left: 0
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style, 
          zIndex: 999,
          display: 'block', 
          right: 0
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <Box sx={{ mx: '1rem', my: '1rem' }}>
        <Slider {...settings}>
            <Link>
              <img 
                src='../../../../../image/brand-logo/samsung.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/vivo.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src="../../../../../image/brand-logo/realme.png"
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/mi.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/sony.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/nokia.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/lg.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/oppo.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/samsung.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/vivo.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src="../../../../../image/brand-logo/realme.png"
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/mi.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/sony.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/nokia.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/lg.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
            <Link>
              <img 
                src='../../../../../image/brand-logo/oppo.png'
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </Link>
        </Slider>
      </Box>
    </>
  );

}