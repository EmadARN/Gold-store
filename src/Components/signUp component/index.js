import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import bg from "../../Asset/pexels-michael-steinberg-321464.jpg";
import { IPServer } from "@/Config";
import axios from "axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import CircularIndeterminate from "../loader/loading";
import {
  ButtonBox,
  ButtonStyle,
  ContentGrid,
  FirstBox,
  InputStyle,
  MainGrid,
} from "./Style";

const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

export default function SignUpSide() {
  const [phone_number, setPhone_number] = React.useState("");

  const [cookies, setCookie] = useCookies(["phone-number"]);
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Grid container sx={MainGrid(bg)}>
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
              <Avatar sx={{ m: 1 }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                color="#fff"
                fontFamily="Lalezar"
                component="h1"
                variant="h5"
              >
                ورود | ثبت نام
              </Typography>

              <Box sx={{width:{xs:"70%",md:"50%"}}}>
                <TextField
                
                  onChange={(e) => setPhone_number(e.target.value)}
                  sx={InputStyle}
                  margin="normal"
                  fullWidth
                  id="number"
                  label="شماره تلفن همراه"
                  autoFocus
                />
              </Box>

              <Box sx={ButtonBox}>
                <Button
                  disabled={phone_number.length == 11 ? false : true}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={ButtonStyle}
                  onClick={(e) => {
                    e.preventDefault();
                    setLoading(true);

                    axios({
                      method: "GET",
                      url: `${IPServer}/Authentication/send-code/phone-number=${phone_number}/`,
                    })
                      .then((res) => {
                        console.log(res);
                        setCookie("phone-number", phone_number, {
                          path: "/",
                        });
                        router.push("/VerifyCode");
                      })
                      .catch((err) => {console.log(err);});
                  }}
                >
                  {loading ? <CircularIndeterminate color="#222" /> : "ادامه"}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}
