import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Paper } from "@mui/material";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { IPServer } from "@/Config";
import axios from "axios";

import {
  BoxMain,
  BtnMenu,
  button_name,
  hossein_gold_typo,
  icon_button,
  link_style,
  list_item_text,
  main_style,
  Toolbar2,
  typo_box,
  typo_name,
  AppBar,
  Main,
  DrawerHeader,
  drawer_style,
 
} from "./Style";
const drawerWidth = 240;

const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

export default function UserDashboard({ children, indexBtn, DrawerObj }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [index1, setIndex1] = React.useState();
  const [cookies, setCookies, removeCookie] = useCookies(["phone_number"]);
  const [name, setName] = React.useState();
  const router = useRouter();
  const handleIndex = (step) => {
    setIndex1(step);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //Api for NameProfile
  React.useEffect(() => {
    axios
      .get(`${IPServer}/UserDashboard-DeskPage/wallet-data/`, {
        headers: {
          Authorization: `Token ${cookies.token}`,
        },
      })
      .then((res) => {
        setName(res.data.name);
      });
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <BoxMain className="active-bg" sx={{}}>
          <AppBar
            drawerWidth={drawerWidth}
            position="fixed"
            open={open}
            className="active-Header"
            sx={{ bgcolor: "#3C3A36" }}
          >
            <Toolbar sx={Toolbar2}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={icon_button(open)}
              >
                <BtnMenu>منو</BtnMenu>
              </IconButton>
              <Box sx={typo_box}>
                <Typography variant="" sx={typo_name}>
                  {name}
                </Typography>
                <AccountBoxIcon sx={{ fontSize: "30px" }} />
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={drawer_style(drawerWidth)}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <Paper sx={{ bgcolor: "#272523" }}>
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <Typography variant="h3" sx={hossein_gold_typo}>
                  طلای حسین
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
                    <Link href={text.toPage} style={link_style}>
                      <Divider sx={{ bgcolor: "#000" }} />
                      <Button
                        sx={button_name(index, indexBtn)}
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
                      onClick={() => {
                        removeCookie("token");
                        router.push("/");
                      }}
                      primary={text}
                      sx={list_item_text}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Main
            drawerWidth={drawerWidth}
            open={open}
            sx={main_style(drawerWidth, open)}
          >
            <DrawerHeader />

            {children}
          </Main>
        </BoxMain>
      </ThemeProvider>
    </CacheProvider>
  );
}
