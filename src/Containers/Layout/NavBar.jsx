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
import React from "react";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages1 = [
  {
    id: 4,
    link: "/",
    text: "خانه",
  },
  {
    id: 1,
    link: "/About",
    text: "درباره ما",
  },

  {
    id: 2,
    link: "/Faqs",
    text: "سوالات متداول",
  },
  {
    id: 3,
    link: "/Contact",
    text: "ارتباط با ما",
  },
];

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
  return (
    <AppBar position="static">
      <Container sx={{ backgroundColor: "#1C1B19" }} maxWidth="L">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img width={40} height={40} src={props.image} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            طلایار
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  "& .MuiPaper-root": {
                    width: "100vw",
                    height: "100vh",
                    transition: "all 2s ease-in-out",
                    backgroundColor: "#3C3A36",
                  },
                },
              }}
            >
              {pages1.map((page) => (
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
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img width={40} height={40} src={props.image} />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Yekan",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            طلایار
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages1.map((page) => (
              <Link
                style={{ textDecoration: "none" }}
                className="myLink"
                href={page.link}
              >
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    textDecoration: "none",

                    my: 2,
                    mx: 2,
                    color: "white",
                    fontFamily: "Yekan",
                    display: "block",
                    fontSize: "20px",
                    transition: "all ease-out .6s",

                    "&:hover": { borderBottom: "1px solid  #FFC436" },
                  }}
                >
                  {page.text}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="ثبت نام">
              {props.dashboard === "400" ? (
                <Link href="/SignUp">
                  <Button
                    sx={{
                      fontFamily: "Yekan",
                      color: "#FFC436",
                      border: "1px solid #FFC436",
                      "&:hover": { backgroundColor: "rgba(204, 163, 69,0.4)" },
                    }}
                  >
                    ورود | ثبت نام
                  </Button>
                </Link>
              ) : (
                <Link href="/DeskPage">
                  <Button
                    sx={{
                      fontFamily: "Yekan",
                      color: "#FFC436",
                      border: "1px solid #FFC436",
                      "&:hover": { backgroundColor: "rgba(204, 163, 69,0.4)" },
                    }}
                  >
                    پروفایل
                  </Button>
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
