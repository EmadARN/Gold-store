import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import bg from "../../Asset/pexels-michael-steinberg-321464.jpg";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { IPServer } from "@/Config";
import Link from "next/link";
import CircularIndeterminate from "../loader/loading";
import {
  EditNumberBtn,
  InnerGrid,
  MainVerifyBox,
  VerifyButton,
  VerifyMainGrid,
  VerifytextField,
} from "./Style";

const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const VerifyCode = () => {
  const [cookies, setCookie] = useCookies(["phone-number"]);
  const [verify_code, setVerify_code] = React.useState("");
  const [phone_number2, setPhone_number2] = React.useState(
    cookies["phone-number"]
  );
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Grid container sx={VerifyMainGrid(bg)}>
          <Grid
            sx={InnerGrid}
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box sx={MainVerifyBox}>
              <Typography
                color="#fff"
                fontFamily="Lalezar"
                component="h1"
                variant="h5"
              >
                کد تایید را وارد کنید
              </Typography>
              <Box  component="form" noValidate sx={{ mt: 1,width:{xs:"70%",md:"50%"} }}>
                <TextField
                  onChange={(e) => setVerify_code(e.target.value)}
                  sx={VerifytextField}
                  margin="normal"
                  fullWidth
                  id="number"
                  label=" کد تایید "
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Box>

              <Box width="30%">
                <Button
                  disabled={verify_code.length == 6 ? false : true}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={VerifyButton}
                  onClick={(e) => {
                    e.preventDefault();
                    setLoading(true);
                    axios
                      .post(`${IPServer}/Authentication/prove-auth-code/`, {
                        phone_number: phone_number2,
                        code: verify_code,
                      })
                      .then((res) => {
                        setCookie("token", res.data.token, {
                          path: "/",
                        });
                        setCookie("user_type", res.data.user_type, {
                          path: "/",
                        });
                        console.log(res.data);

                        if (res.data.signup_require) {
                          router.push("/SignUpInfo");
                        } else if (
                          res.data.user_type === "customer" &&
                          !res.data.signup_require
                        ) {
                          router.push("/DeskPage");
                        } else {
                          router.push("/CashAmountAdmin");
                        }
                      });
                  }}
                >
                  {loading ? <CircularIndeterminate color="#222" /> : "تایید"}
                </Button>
              </Box>

              <Box sx={{mt:2,px:1,bgcolor:"#F1AB1F",borderRadius:"10px","&:hover":{bgcolor:"#d3961b"},width:{xs:"45%",md:"30%"},textAlign:"center"}}>
                <Link  href={"/VerifyNumber"}>
                  <Button variant="text" sx={EditNumberBtn}>
                    {" "}
                    ویرایش شماره همراه
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default VerifyCode;
