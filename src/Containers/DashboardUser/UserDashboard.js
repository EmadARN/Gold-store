import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

import { Button, Paper } from "@mui/material";
import Link from "next/link";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const BtnMenu = styled("div")(({ theme }) => ({
  paddingLeft: 30,
  paddingRight: 30,
  paddingBottom: 5,
  paddingTop: 5,
  borderRadius: "4px",
  backgroundColor: "#FFC436",
  color: "#000",
  fontSize: "20px",
  fontWeight: "bolder",
  boxShadow:
    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
  transition: "all 1s ease",
  "&:hover": {
    px: 6,
    backgroundColorr: "#FFC436",
    opacity: "0.8",
    boxShadow:
      "#FFC436 0px 2px 30px,#FFC436 0px 7px 90px -3px,#FFC436 0px -3px 30px ",
  },
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
export default function UserDashboard({ children, indexBtn,DrawerObj }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [index1, setIndex1] = React.useState();
  const handleIndex = (step) => {
    setIndex1(step);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Box sx={{ display: "flex" }}>
          <AppBar position="fixed" open={open} sx={{ bgcolor: "#3C3A36" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  mr: 2,
                  ...(open && {
                    display: "flex",
                    opacity: "0",
                    cursor: "auto",
                  }),
                }}
              >
                <BtnMenu>منو</BtnMenu>
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                <AccountBoxIcon sx={{ fontSize: "30px" }} />
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,

              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                bgcolor: "#272523",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <Paper sx={{ bgcolor: "#272523" }}>
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h3"
                  sx={{ color: "#FFC436", textAlign: "center", pt: 1 }}
                >
                  گلدیار
                </Typography>
              </Link>
            </Paper>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>

            <Divider />
            <List sx={{}}>
              {DrawerObj.map((text, index) => {
                return (
                  <ListItem key={index} disablePadding>
                    <Link
                      href={text.toPage}
                      style={{
                        textDecoration: "none",
                        width: "100%",
                      }}
                    >
                      <Divider sx={{ bgcolor: "#000" }} />
                      <Button
                        sx={{
                          bgcolor: index + 1 === indexBtn ? "#FFC436" : null,
                          color: index + 1 == indexBtn ? "#000" : "#fff",
                          width: "100%",
                          display: "flex",
                          justifyContent: "start",
                          pl: 2,
                          py: 1,
                          fontSize: "20px",
                          fontWeight: "bold",
                          borderRadius: "0",
                          "&:hover": {
                            bgcolor: "#FFC436",
                            color: "#000",
                            borderRadius: "0",
                          },
                        }}
                        onClick={() => handleIndex(index)}
                      >
                        {text.name}
                      </Button>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <List>
              {["خروج"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    sx={{
                      color: "#FF3F3F",
                    }}
                  >
                    <LogoutIcon />
                    <ListItemText
                      primary={text}
                      sx={{
                        pl: 1,
                        "& .MuiTypography-root": {
                          fontSize: "20px",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Main
            open={open}
            sx={{
              ...(open && {
                width: `calc(50% - ${drawerWidth}px)`,
                position: { xs: "absolute", sm: "static" },
              }),
            }}
          >
            <DrawerHeader />

            {children}
          </Main>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
