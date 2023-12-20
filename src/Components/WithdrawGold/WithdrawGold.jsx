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
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div style={{ maxWidth: "800px" }}>
        <Typography
          variant="h3"
          sx={{ color: "#fff", fontWeight: "bold", my: 5, fontFamily:'Yekan',textAlign: "center",fontSize:{xs:"33px",md:'40px'} }}
        >
          دریافت طلا
        </Typography>
        <Paper
          sx={{
            bgcolor: "#272523",
            width: "100%",

            borderRadius: "10px",
            height: "100%",
            px: 6,
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "20px", py: 3 }}>
            مقدار را وارد کنید:
          </Typography>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={themee}>
              <TextField
                onChange={(e) => changeHandler(e)}
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
                      گرم
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
                      .then(() => {
                        window.location.reload();
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
              <Typography variant="h6" sx={{ color: "#fff", pb: 2 }}>
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
