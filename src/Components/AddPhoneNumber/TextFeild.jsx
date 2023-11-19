import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
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
const TextFeild2 = () => {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={themee}>
          <TextField
            sx={{
              width: "100%",

              input: { color: "#fff", direction: "rtl", pr: 2 },
              label: { color: "#fff" },
              "& label.Mui-focused": {
                color: "#fff",
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
                  borderColor: "#fff",
                },
              },
            }}
            label="َشماره همراه خود را وارد کنید"
            id="outlined-start-adornment"
            InputProps={{
              endAdornment: (
                <Button
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    ml: 2,
                    color: "#111",
                    borderRadius: "9px",
                    border: "1px solid #FFC436",
                    backgroundColor: "#FFC436",
                    "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
                  }}
                >
                  ادامه
                </Button>
              ),
            }}
          />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default TextFeild2;
