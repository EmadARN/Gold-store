import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import bg from "../../Asset/pexels-michael-steinberg-321464.jpg";
import axios from "axios";
import { IPServer } from "@/Config";

import { CookiesProvider, useCookies } from "react-cookie";
import {
  ButtonStyle2,
  ContentGrid,
  FirstBox,
  InputStyle,
  MainGrid,
} from "../signUp component/Style";

const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const SignUpInfo = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  const router = useRouter();

  const [inpInfo, setInpInfo] = useState({});

  const InputHandler = (e, propertyName) => {
    setInpInfo({ ...inpInfo, [propertyName]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(`${IPServer}/Authentication/sign-up/`, inpInfo, {
        headers: {
          Authorization: `Token ${cookies["token"]}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        router.push("/DeskPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Grid container sx={MainGrid}>
          <Grid
            sx={ContentGrid}
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box sx={FirstBox}>
              <Typography
                color="#fff"
                fontFamily="Lalezar"
                component="h1"
                variant="h5"
              >
                اطلاعات کاربر
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  sx={InputStyle}
                  margin="normal"
                  fullWidth
                  id="number"
                  label="نام"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => InputHandler(e, "first_name")}
                />

                <TextField
                  sx={InputStyle}
                  margin="normal"
                  fullWidth
                  id="number"
                  label="  نام خانوادگی"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => InputHandler(e, "last_name")}
                />

                <TextField
                  sx={InputStyle}
                  margin="normal"
                  fullWidth
                  id="number"
                  label="کد ملی"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => InputHandler(e, "national_code")}
                />
                <TextField
                  sx={InputStyle}
                  margin="normal"
                  fullWidth
                  id="number"
                  label="شماره کارت"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => InputHandler(e, "email")}
                />
                <TextField
                  sx={InputStyle}
                  margin="normal"
                  fullWidth
                  id="number"
                  label="شماره شبا"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => InputHandler(e, "email")}
                />

                <TextField
                  sx={InputStyle}
                  margin="normal"
                  fullWidth
                  id="number"
                  label="ایمیل"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => InputHandler(e, "email")}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={ButtonStyle2}
                  onClick={(e) => submit(e)}
                >
                  تایید
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default SignUpInfo;
