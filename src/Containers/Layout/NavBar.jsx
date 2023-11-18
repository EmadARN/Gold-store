import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Menu, Toolbar, Tooltip, Typography } from "@mui/material";
import React from "react";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ['ارتباط با ما', 'سوالات متداول', 'درباره ما'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return(
    <AppBar  position="static" >
      <Container sx={{backgroundColor:"#1C1B19"}} maxWidth="L">
        <Toolbar disableGutters>
          <Box sx={{display:{xs:"none" ,md:"block"}}}>
         <img  width={40} height={40} src={props.image}/>
         </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml:4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            طلایار
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
         <img  width={40} height={40} src={props.image}/>
         </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Yekan',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
            طلایار
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,mx:2, color: 'white',fontFamily:"Yekan", display: 'block' ,fontSize:"20px" ,'&:hover':{borderBottom:"1px solid white"} }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="ثبت نام">
              <Button sx={{fontFamily:"Yekan",color:"#FFC436",border:"1px solid #FFC436" ,'&:hover':{backgroundColor:"rgba(204, 163, 69,0.4)"}}}>ورود | ثبت نام</Button>
            </Tooltip>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
