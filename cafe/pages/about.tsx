import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: 'flex', width: '50%', minWidth: '50%' }}>
          <Image
            src={'/images/empaque2.webp'}
            alt={'empaque'}
            width={150}
            height={150}
          />
          <Typography style={{ fontFamily: 'fantasy' }}>
            Nuestra vision
            <Typography>
              Proveer café de calidad para consumo
              <br />
              lpersonal o al por mayor
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', width: '50%', minWidth: '50%' }}>
          <Image
            src={'/images/empaque2.webp'}
            alt={'empaque'}
            width={150}
            height={150}
          />
          <Typography style={{ fontFamily: 'fantasy' }}>
            Nuestra misión
            <Typography>
              Ser proveedores de café de calidad para
              <br />
              la sociedad en general
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box sx={{ display: 'flex', width: '50%', minWidth: '50%' }}>
          <Image
            src={'/images/empaque2.webp'}
            alt={'empaque'}
            width={150}
            height={150}
          />
          <Typography style={{ fontFamily: 'fantasy' }}>
            Somos una empresa de produccion de cafe organico
            <Typography>
              Hacemos usos de abonos organicos y otros prouctos
              <br /> que nos permitan
              <br />
              producir granos lo mas libre de quimicos posible
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', width: '50%', minWidth: '50%' }}>
          <Image
            src={'/images/empaque2.webp'}
            alt={'empaque'}
            width={150}
            height={150}
          />
          <Typography style={{ fontFamily: 'fantasy' }}>
            Empaques seguros
            <Typography>
              Contamos con envases de calidad que garantizan
              <br />
              la seguridad, higiene y frescura de los granos
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
