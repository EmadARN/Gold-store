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
  console.log("cookiessss", cookies);

  const router = useRouter();
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Grid
          container
          sx={{
            minHeight: "100vh !important",
            height: "auto !important",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              WebkitBackdropFilter: "blur(7px) !important",
              backdropFilter: { xs: "blur(7px)", md: "blur(10px)" },
              boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.5)",
              maxHeight: "70%",
              maxWidth: { xs: "90%", md: "100%" },
              mt: 4,
              borderRadius: "10px",
              maxHeight: "550px !important",
              height: "auto !important",
            }}
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 20,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                color="#fff"
                fontFamily="Lalezar"
                component="h1"
                variant="h5"
              >
                کد تایید را وارد کنید
              </Typography>
              <Box width="70%" component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  onChange={(e) => setVerify_code(e.target.value)}
                  sx={{
                    width: "100%",

                    input: { color: "#fff", direction: "rtl", pr: 2 },
                    label: { color: "black" },
                    "& label.Mui-focused": {
                      color: "#FFC436",
                      fontWeight: "bold",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#fff",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#fff",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fff",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FFC436",
                      },
                    },
                  }}
                  margin="normal"
                  fullWidth
                  id="number"
                  label=" کد تایید "
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Box>

              <Box width="40%">
                <Button
                  disabled={verify_code.length == 6 ? false : true}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#FFC436",
                    color: "#111",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
                  }}
                  onClick={(e) => {
                    e.preventDefault();
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
                  تایید
                </Button>
              </Box>

              <Box>
                <Link href={"/VerifyNumber"}>
                  <Button
                    variant="text"
                    sx={{
                      mt: 1,
                      fontSize: "18px",

                      color: "#FFC436",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "unset", color: "#222" },
                    }}
                  >
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
