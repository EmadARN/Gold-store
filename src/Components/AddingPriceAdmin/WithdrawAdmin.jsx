import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import numeral from "numeral";
import { IPServer } from "@/Config";
import axios from "axios";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import {
  BoxOneSx,
  BoxSx, BoxTwoSx, ButtonOneSx,
  DivOneSx, InputAdornmentSx,
  PaperOneSx, SpanOneSx,
  TextFildOneSx,
  TypoOneSx, TypoTowSx,
  TypotwoSx
} from "@/Components/AddingPriceAdmin/Style";
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const WithdrawAdmin = (props) => {

  const [cookies, setCookie] = useCookies(["token"]);
  const [addingPrice, setAddingPrice] = useState();
  const handleTextFieldChange = (event) => {
    const newValue = numeral(event.target.value).format("0,0");
    setTextFieldValue(parseFloat(newValue));
  };

  return (
    <Box
      sx={BoxOneSx}
    >
      <div style={DivOneSx}>
        <Typography
          variant="h3"
          sx={TypoOneSx}
        >
          {props.title}
        </Typography>
        <Paper
          sx={PaperOneSx}
        >
          <Typography sx={TypotwoSx}>
            {props.BoxTitle} :
          </Typography>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={themee}>
              <TextField
                onChange={(e) => {
                  const newValue = numeral(e.target.value).format("0,0");

                  setAddingPrice(newValue);
                }}
                id="outlined-start-adornment"
                sx={TextFildOneSx}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={InputAdornmentSx}
                      position="start"
                    >
                      {props.inputLabel}
                    </InputAdornment>
                  ),
                }}
                value={addingPrice}
              />
              <Box sx={BoxTwoSx}>
                <Button
                  variant="outlined"
                  onClick={async (e) => {
                    e.preventDefault();
                    await axios
                      .post(
                        `${IPServer}/AdminDashboard-Setting/change-gold-price/`,
                        {
                          gold_price: addingPrice.replace(",", ""),
                        },
                        {
                          headers: {
                            Authorization: `Token ${cookies.token}`,
                          },
                        }
                      )
                      .then((res) => {
                      
                         Swal.fire({
                           title: res.data.responseFA,
                           text: " تغیرات با موفقیت اعمال شد ",
                           icon: "success",
                         }).then(() => window.location.reload());
                      })
                      .catch((err) => {
                        
                         Swal.fire({
                           title: err.response.data.responseFA,
                           text: "در صورت بوجود آمدن مشکل با پشتیبانی تماس بگیرید ",
                          icon: "error",
                         });
                      });
                  }}
                  sx={ButtonOneSx}
                >
                  {props.buttonText}
                </Button>
              </Box>
              <Typography variant="h6" sx={TypoTowSx}>
                <span style={SpanOneSx}>
                  {props.walletcash}:
                </span>
                <span>{props.walletValue}&nbsp;ریال</span>
              </Typography>
            </ThemeProvider>
          </CacheProvider>
        </Paper>
      </div>
    </Box>
  );
};

export default WithdrawAdmin;
