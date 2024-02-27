import {
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import {ButtonTextSx, TexFeildOneSx} from "@/Components/AddPhoneNumber/Style";
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
            sx={TexFeildOneSx}
            label="َشماره همراه خود را وارد کنید"
            id="outlined-start-adornment"
            InputProps={{
              endAdornment: (
                <Button
                  sx={ButtonTextSx}
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
