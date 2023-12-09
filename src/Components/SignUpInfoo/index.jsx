import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
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
import axios from "axios";
import { IPServer } from "@/Config";

import { CookiesProvider, useCookies } from "react-cookie";

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

const [inpInfo , setInpInfo] = useState({})

const InputHandler =(e ,propertyName)=>{
  setInpInfo({...inpInfo , [propertyName]: e.target.value})
}



const submit =(e)=>{
  e.preventDefault();
  axios.post(`${IPServer}/Authentication/sign-up/`,inpInfo,
  {
    headers:{
Authorization: `Token ${cookies["token"]}`
    }
  },

  ).then((res)=>{
console.log(res.data);
    router.push('/DeskPage')
    
  }).catch((err)=>{
    console.log(err);
  })

}


  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Grid
          container
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(15px)",
              boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255,255,255,0.5)",

              maxHeight: "70%",
              mt: "8%",
              borderRadius: "10px",
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
                my: 10,
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
                اطلاعات کاربر
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  sx={{
                    width: "100%",

                    input: { color: "#fff", direction: "rtl", pr: 2 },
                    label: { color: "#000" },
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
                  label="نام"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e)=>InputHandler(e, "first_name")}
                />

                <TextField
                  sx={{
                    width: "100%",

                    input: { color: "#fff", direction: "rtl", pr: 2 },
                    label: { color: "#000" },
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
                  label="  نام خانوادگی"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e)=>InputHandler(e, "last_name")}
                />

                <TextField
                  sx={{
                    width: "100%",

                    input: { color: "#fff", direction: "rtl", pr: 2 },
                    label: { color: "#000" },
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
                  label="کد ملی"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e)=>InputHandler(e, "national_code")}
                />

                <TextField
                  sx={{
                    width: "100%",

                    input: { color: "#fff", direction: "rtl", pr: 2 },
                    label: { color: "#000" },
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
                  label="ایمیل"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e)=>InputHandler(e, "email")}
                />

                <Button
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
                  onClick={(e)=>submit(e)}
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
