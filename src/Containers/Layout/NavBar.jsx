import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DashboardPath } from "./util/DashboarPath";
import { pages1 } from "./data";
import {
  button_text,
  container_style,
  gold_store_name_typo,
  icon_box,
  map_box,
  menu_style,
  profile_button,
  xs_typo,
} from "./NavbarStyle";

const NavBar = (props) => {
  const [navlink, setNavlink] = useState(pages1);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container sx={container_style} maxWidth="L">
        <Toolbar disableGutters>
          {/* <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img width={40} height={40} src={props.image} />
          </Box> */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={gold_store_name_typo}
          >
            طلای حسین
          </Typography>

          <Box sx={icon_box}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={menu_style}
            >
              {navlink.map((page) => (
                <Link key={page.id} href={page.link}>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pt: 6,
                    }}
                  >
                    <Typography
                      fontWeight="bold"
                      fontFamily="Yekan"
                      color="#fff"
                      textAlign="center"
                    >
                      {page.text}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img width={40} height={40} src={props.image} />
          </Box> */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={xs_typo}
          >
            طلای حسین
          </Typography>
          <Box sx={map_box}>
            {navlink.map((page) => (
              <Link
                style={{ textDecoration: "none" }}
                className="myLink"
                href={page.link}
              >
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={button_text}
                >
                  {page.text}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="ثبت نام">
              {props.dashboard === "200" ? (
                <Link href={DashboardPath()}>
                  <Button sx={profile_button}>پروفایل</Button>
                </Link>
              ) : (
                <Link href="/SignUp">
                  <Button sx={profile_button}>ورود | ثبت نام</Button>
                </Link>
              )}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
