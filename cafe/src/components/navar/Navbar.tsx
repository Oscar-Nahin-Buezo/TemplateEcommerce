import { useState } from 'react';
import { AppBar, Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import logo from '../../../public/images/pandalogo.jpeg';
import Image from 'next/image';
export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>

          {isMobile ? (
            <IconButton
              edge="start"
              style={{ marginRight: theme.spacing(2) }}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          {!isMobile ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                color: 'black',
              }}
            >
              <Box sx={{ margin: 4 }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </Box>

              <Box sx={{ margin: 4 }}>
                <Link href="/products" style={{ textDecoration: 'none' }}>
                  Products
                </Link>
              </Box>
              <Box sx={{ margin: 4 }}>
                <Link href="/about" style={{ textDecoration: 'none' }}>
                  About
                </Link>
              </Box>
              <Box sx={{ margin: 4 }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  Contact
                </Link>
              </Box>
            </Box>
          ) : null}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        style={{ width: '250px' }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          {/* Aquí irían otros elementos del menú */}
        </List>
      </Drawer>
    </div>
  );
}
