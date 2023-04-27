import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Products() {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: 3,
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <Card sx={{ width: '50%', maxWidth: 345, marginTop: 2 }}>
        <CardMedia
          sx={{ height: 150, width: 150 }}
          image="/images/empaque2.webp"
          title="Tueste Oscuro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tueste medio Precio: L.150.00/libra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El café se tuesta durante unos minutos más que en el tueste claro,
            lo que produce granos de color marrón dorado. Este tipo de tueste
            produce un sabor equilibrado entre la acidez y la amargura, con un
            aroma más intenso.
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>
      <Card sx={{ width: '50%', maxWidth: 345, marginTop: 2 }}>
        <CardMedia
          sx={{ height: 150, width: 150 }}
          image="/images/empaque2.webp"
          title="Tueste Oscuro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tueste medio-alto Precio: L.150.00/libra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El café se tuesta durante un poco más de tiempo, lo que produce
            granos de color marrón oscuro. Este tipo de tueste produce un sabor
            más rico y agridulce con menos acidez.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>

      <Card sx={{ width: '50%', maxWidth: 345, marginTop: 2 }}>
        <CardMedia
          sx={{ height: 150, width: 150 }}
          image="/images/empaque2.webp"
          title="Tueste Oscuro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tueste Oscuro Precio: L.150.00/libra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El café se tuesta durante un tiempo más prolongado, lo que produce
            granos de color marrón oscuro casi negro. Este tipo de tueste
            produce un sabor más amargo y menos ácido, con un cuerpo más intenso
            y una sensación más aceitosa en la boca.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>
      <Card sx={{ width: '50%', maxWidth: 345, marginTop: 2 }}>
        <CardMedia
          sx={{ height: 150, width: 150 }}
          image="/images/empaque2.webp"
          title="Tueste Oscuro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tueste Oscuro Precio: L.150.00/libra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El café se tuesta durante un tiempo más prolongado, lo que produce
            granos de color marrón oscuro casi negro. Este tipo de tueste
            produce un sabor más amargo y menos ácido, con un cuerpo más intenso
            y una sensación más aceitosa en la boca.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>
      <Card sx={{ width: '50%', maxWidth: 345, marginTop: 2 }}>
        <CardMedia
          sx={{ height: 150, width: 150 }}
          image="/images/empaque2.webp"
          title="Tueste Oscuro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tueste Oscuro Precio: L.150.00/libra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El café se tuesta durante un tiempo más prolongado, lo que produce
            granos de color marrón oscuro casi negro. Este tipo de tueste
            produce un sabor más amargo y menos ácido, con un cuerpo más intenso
            y una sensación más aceitosa en la boca.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>
      <Card sx={{ width: '50%', maxWidth: 345, marginTop: 2 }}>
        <CardMedia
          sx={{ height: 150, width: 150 }}
          image="/images/empaque2.webp"
          title="Tueste Oscuro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tueste Oscuro Precio: L.150.00/libra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El café se tuesta durante un tiempo más prolongado, lo que produce
            granos de color marrón oscuro casi negro. Este tipo de tueste
            produce un sabor más amargo y menos ácido, con un cuerpo más intenso
            y una sensación más aceitosa en la boca.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
