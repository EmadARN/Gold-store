import {
  Box,
  Button,
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
import { IPServer } from "@/Config";
import axios from "axios";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { FirstBox, get_button, get_gold_typo, last_typo, widthraw_gold_input, withdraw_gold_paper } from "./Style";

const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const WithdrawGold = ({ walletDataToken }) => {
  const [goldAmount, setGoldAmount] = React.useState({ value: "" });
  const changeHandler = (event) => {
    const newValue = { ...goldAmount, value: event.target.value };
    setGoldAmount(newValue);
  };

  const [cookies] = useCookies(["token"]);
  return (
    <Box
      sx={FirstBox}
    >
      <div style={{ maxWidth: "800px" }}>
        <Typography
          variant="h3"
          sx={get_gold_typo}
        >
          دریافت طلا
        </Typography>
        <Paper
          sx={
            withdraw_gold_paper
          }
        >
          <Typography sx={{ color: "#fff", fontSize: "20px", py: 3 }}>
            مقدار را وارد کنید:
          </Typography>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={themee}>
              <TextField
                onChange={(e) => changeHandler(e)}
                id="outlined-start-adornment"
                sx={
                  widthraw_gold_input
                }
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
                      گرم
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  sx={
                    get_button
                  }
                  onClick={async (e) => {
                    e.preventDefault();
                    await axios
                      .post(
                        `${IPServer}/UserDashboard-GetRequest/get-request-gold/`,
                        { gold_amount: parseFloat(goldAmount.value) },
                        {
                          headers: {
                            Authorization: `Token ${cookies.token}`,
                          },
                        }
                      )
                      .then((res) => {
                        Swal.fire({
                          title: res.data.responseFA,
                          text: "در صورت بوجود آمدن مشکل با پشتیبانی تماس بگیرید ",
                          icon: "success",
                        });
                      })
                     
                      .catch((err) => {
                        Swal.fire({
                          title: err.response.data.responseFA,
                          text: "در صورت بوجود آمدن مشکل با پشتیبانی تماس بگیرید ",
                          icon: "error",
                        });
                      });
                  }}
                >
                  دریافت
                </Button>
              </Box>
              <Typography variant="h6" sx={last_typo}>
                <span style={{ color: "rgb(255,172,25)" }}>کیف طلا:</span>
                <span>{walletDataToken.wallet_gold_data}&nbsp;گرم</span>
              </Typography>
            </ThemeProvider>
          </CacheProvider>
        </Paper>
      </div>
    </Box>
  );
};

export default WithdrawGold;
