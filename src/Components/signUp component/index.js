import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";



const themee = createTheme({
    direction: "rtl",
  });
  
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });


export default function SignUpSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={themee}>
      <Grid container  sx={{mt:10, height: '50vh',display:"flex",justifyContent:"center"}}>
        
       
        <Grid sx={{backgroundColor:"#272523"}}  item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
             
              my: 20,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1,  }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography color="#fff" fontFamily="Lalezar" component="h1" variant="h5">
              ورود | ثبت نام
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                sx={{
                    width: "100%",
      
                    input: { color: "#fff", direction: "rtl", pr: 2 },
                    label: { color: "#b7b3b0" },
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
                required
                fullWidth
                id="number"
                label="شماره تلفن همراه"
                name="email"
                autoComplete="email"
                autoFocus
              />
    
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,backgroundColor:"#FFC436",color:"#111",fontWeight:"bold", "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },}}
              >
                ادامه
              </Button>
             
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </CacheProvider>
  );
}