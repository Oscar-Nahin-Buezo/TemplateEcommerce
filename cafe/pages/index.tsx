import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/src/components/footer/Footer';
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '@/src/components/carrousel/Carousel';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content="Coffee Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: 2,
              alignItems: 'center',
            }}
          >
            <Typography
              fontFamily="MyCustomFont"
              style={{ fontWeight: 400, fontSize: 60, alignSelf: 'center' }}
            >
              Big Panda
            </Typography>
            <Box>
              <Image
                src={'/images/pandalogo.jpeg'}
                alt={'logo'}
                width={400}
                height={400}
              />
            </Box>

            <Typography
              fontFamily="MyCustomFont"
              style={{ fontWeight: 400, fontSize: 60, alignSelf: 'center' }}
            >
              Coffee
            </Typography>
          </Box>
          <Box sx={{ alignSelf: 'center' }}>
            <Typography
              fontFamily="MyCustomFont"
              style={{
                fontWeight: 400,
                fontSize: 60,
              }}
            >
              Welcome
            </Typography>
          </Box>
        </Box>
        {/*<Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Box>
            <Image
              src={'/images/granos.jpg'}
              alt={'logo'}
              width={200}
              height={150}
              style={{ borderRadius: 25 }}
            />
          </Box>
          <Box sx={{ alignSelf: 'center' }}>
            <Typography
              fontFamily="MyCustomFont"
              style={{ fontWeight: 40, fontSize: 20 }}
            >
              Nos enfocamos en la produccion de <br />
              granos organicos de alta calidad.
            </Typography>
          </Box>
          <Box>
            <Image
              src={'/images/cultivo.jpg'}
              alt={'logo'}
              width={200}
              height={150}
              style={{ borderRadius: 25 }}
            />
          </Box>
          <Box sx={{ alignSelf: 'center' }}>
            <Typography
              fontFamily="MyCustomFont"
              style={{ fontWeight: 40, fontSize: 20 }}
            >
              Contamos con alrededor de
              <br />
              50 Hectareas de cultivo
              <br />
            </Typography>
          </Box>
      </Box>*/}
      </Box>
    </>
  );
}
