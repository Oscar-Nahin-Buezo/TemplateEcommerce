import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }
`;

const StyledBox = styled(Box)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imgSrc = [
    '/images/granos.jpg',
    '/images/c1.jpg',
    '/images/c2.jpg',
    '/images/c3.jpg',
    '/images/p2.jpg',
    '/images/granos.jpg',
    '/images/granos.jpg',
    '/images/granos.jpg',
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: 2,
        borderRadius: 2,
      }}
    >
      <StyledSlider {...settings} sx={{ width: 400 }}>
        {imgSrc.map((src, index) => (
          <Box key={index} sx={{ borderRadius: 2 }}>
            <StyledBox style={{ borderRadius: 3 }}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={400}
                height={400}
                style={{ borderRadius: 3 }}
              />
            </StyledBox>
          </Box>
        ))}
      </StyledSlider>
    </Box>
  );
};

export default Carousel;
