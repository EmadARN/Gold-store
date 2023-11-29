import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
const Pricedifrences = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Paper
            sx={{
              bgcolor: "#272523",
              width: "100%",

              borderRadius: "10px",

              px: 6,
            }}
          >
            <Typography sx={{ color: "red", fontSize: "20px", py: 3 }}>
              {props.BoxTitle} :
            </Typography>
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={themee}>
                <TextField
                  id="outlined-start-adornment"
                  sx={{
                    width: "100%",

                    input: { color: "#FFC436", direction: "rtl", pr: 2 },

                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FFC436",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#272523",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fff",
                      },
                      "& fieldset": {
                        borderColor: "#fff",
                        borderRadius: "8px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(255,172,25)",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        sx={{
                          "& .MuiTypography-root": {
                            color: "#fff",
                          },
                        }}
                        position="start"
                      >
                        {props.inputLabel}
                      </InputAdornment>
                    ),
                  }}
                />

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      fontSize: "16px",
                      fontWeight: "bold",
                      my: 5,
                      mx: { xs: 2, md: 10 },
                      borderRadius: "7px",
                      color: "rgb(255,172,25)",
                      borderColor: "rgb(255,172,25)",
                      "&:hover": {
                        borderColor: "rgb(255,172,25)",
                      },
                    }}
                  >
                    {props.buttonText}
                  </Button>
                </Box>
              </ThemeProvider>
            </CacheProvider>
          </Paper>
        </div>
      </Box>
    </>
  );
};

export default Pricedifrences;
