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
import {
  BoxOneSx,
  BoxTwoSx,
  ButtononeSx,
  GridOneSx,
  InputAdornmentSx,
  PaperoneSx,
  TextFildOneSx,
  TypoOneSx,
  typoTwoSx,
} from "./Style";
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
    <Box sx={BoxOneSx}>
      <Grid sx={GridOneSx}>
        <Typography variant="h3" sx={TypoOneSx}>
          واریز
        </Typography>
        <Paper sx={PaperoneSx}>
          <Typography sx={typoTwoSx}>مبلغ را وارد کنید:</Typography>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={themee}>
              <TextField
                id="outlined-start-adornment"
                sx={TextFildOneSx}
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={InputAdornmentSx} position="start">
                      ریال
                    </InputAdornment>
                  ),
                }}
                onChange={handleTextFieldChange}
                value={textFieldValue}
              />

              <Box sx={BoxTwoSx}>
                <Button variant="outlined" sx={ButtononeSx}>
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
