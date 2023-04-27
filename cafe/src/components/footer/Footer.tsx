import { Container, Typography, Box, Link, IconButton } from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  Google,
} from '@mui/icons-material';
const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2, marginTop: 30, marginBottom: 0 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Big Panda Coffee. Todos los derechos
            reservados.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Link href="#" color="inherit" target="_blank">
              <IconButton aria-label="Facebook">
                <Facebook />
              </IconButton>
            </Link>
            <Link href="#" color="inherit" target="_blank">
              <IconButton aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Link>
            <Link href="#" color="inherit" target="_blank">
              <IconButton aria-label="Instagram">
                <WhatsApp />
              </IconButton>
            </Link>
            <Link href="#" color="inherit" target="_blank">
              <IconButton aria-label="Twitter">
                <Twitter />
              </IconButton>
            </Link>
            <Link href="#" color="inherit" target="_blank">
              <IconButton aria-label="Instagram">
                <Google />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
