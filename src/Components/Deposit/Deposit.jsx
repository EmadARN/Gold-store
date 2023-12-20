import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import numeral from "numeral";
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const Deposit = () => {
  const [textFieldValue, setTextFieldValue] = React.useState("");

  const handleTextFieldChange = (event) => {
    const newValue = numeral(event.target.value).format("0,0");
    setTextFieldValue(newValue);
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid sx={{ maxWidth: "800px" }}>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
              fontFamily:"Yekan",
              fontSize:{xs:"30px",md:"40px"},
            textAlign: "center",
            my: 6,
          }}
        >
          واریز
        </Typography>
        <Paper
          sx={{
            bgcolor: "#272523",
            width: "100%",
            borderRadius: "10px",
            height: "280px",
            px: 10,
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "20px", py: 3 }}>
            مبلغ را وارد کنید:
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
                      ریال
                    </InputAdornment>
                  ),
                }}
                onChange={handleTextFieldChange}
                value={textFieldValue}
              />

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "70%",
                    fontSize: "16px",
                    fontWeight: "bold",
                    py: 1,
                    my: 6,
                    mx: 6,
                    borderRadius: "7px",
                    color: "rgb(255,172,25)",
                    borderColor: "rgb(255,172,25)",
                    "&:hover": {
                      borderColor: "rgb(255,172,25)",
                    },
                  }}
                >
                  واریز
                </Button>
              </Box>
            </ThemeProvider>
          </CacheProvider>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Deposit;
