import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import numeral from "numeral";
import axios from "axios";
import { IPServer } from "@/Config";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
const BuyGold = ({ walletDataToken, goldStockPrice }) => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const [textFieldValue, setTextFieldValue] = React.useState("");

  const [goldValue, setGoldValue] = React.useState({
    value: "",
  });

  const [cookies] = useCookies(["token"]);

  const handleTextFieldChange = (event) => {
    const newValue = numeral(event.target.value).format("0,0");

    setTextFieldValue(newValue);
  };

  const goldTextfield = (e) => {
    const newValue = { ...goldValue, value: e.target.value };
    setGoldValue(newValue);
  };
  var string = numeral(goldStockPrice.buy_price).format("0,0");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          maxWidth: "550px",
          width: { xs: "100%", md: "100%" },
          mt: 10,
          bgcolor: "rgb(39,37,35)",
          borderRadius: "15px",
        }}
      >
        <Box>
          <Paper
            elevation={10}
            sx={{
              height: "250px",
              width: { xs: "100%", md: "100%" },
              bgcolor: "#3C3A36",
              borderRadius: "15px",
            }}
          >
            <AppBar position="static" sx={{ borderRadius: "10px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  bgcolor: "#3C3A36",
                  py: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: "22px", fontWeight: "bolder", pr: 10 }}
                >
                  قیمت خرید:
                </Typography>
                <Typography
                  sx={{
                    color: "green",
                    display: "flex",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  {string}
                </Typography>
                <Typography
                  sx={{
                    pl: 1,
                    color: "green",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  ریال
                </Typography>
              </Box>
            </AppBar>
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={themee}>
                <Paper
                  sx={{
                    mt: 3,
                    bgcolor: "#272523",
                    width: { xs: "95%", md: "90%" },
                    borderRadius: "10px",
                    mx: "auto",
                  }}
                >
                  <FormControl
                    sx={{
                      width: "100%",

                      input: { color: "#FFC436", direction: "rtl", pr: 2 },
                      label: { color: "#fff" },
                      "& label.Mui-focused": {
                        color: "#FFC436",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#FFC436",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#272523",
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
                    onChange={(e) => handleTextFieldChange(e)}
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      ارزش کل
                    </InputLabel>
                    <OutlinedInput
                      value={textFieldValue}
                      id="outlined-adornment-amount"
                      endAdornment={
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
                      }
                      label="Amount"
                    />
                  </FormControl>
                </Paper>
                <Paper
                  sx={{
                    mt: 2,
                    bgcolor: "#272523",
                    width: { xs: "95%", md: "90%" },
                    borderRadius: "10px",
                    mx: "auto",
                  }}
                >
                  <FormControl
                    onChange={(e) => goldTextfield(e)}
                    sx={{
                      width: "100%",

                      input: { color: "#FFC436", direction: "rtl", pr: 2 },
                      label: { color: "#fff", fontWeight: "bold" },
                      "& label.Mui-focused": {
                        color: "#FFC436",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#FFC436",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#272523",
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
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      مقدار طلا
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      endAdornment={
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
                      }
                      label="Amount"
                    />
                  </FormControl>
                </Paper>
              </ThemeProvider>
            </CacheProvider>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={async (e) => {
              e.preventDefault();

              await axios.post(
                `${IPServer}/UserDashboard-GoldBuySale/buy-gold/`,
                {
                  gold_amount: parseFloat(goldValue.value),
                },
                {
                  headers: {
                    Authorization: `Token ${cookies.token}`,
                  },
                }
              );
              // .then((res) => {
              //   Swal.fire({
              //     title: res.response - fa,
              //     text: "در صورت بروزرسانی نشدن کیف پول با ما تماس بگیرد!!!",
              //     icon: "success",
              //   });
              // })
              // .catch((err) => {
              //   Swal.fire({
              //     title: err.response - fa,
              //     text: "در صورت بروزرسانی نشدن کیف پول با ما تماس بگیرد!!!",
              //     icon: "success",
              //   });
              // });
            }}
            variant="outlined"
            value={value}
            index={0}
            dir={theme.direction}
            sx={{
              "&:hover": {
                borderColor: "#FFC436",
              },
              my: 3,
              width: "60%",
              color: "#FFC436",
              fontSize: "20px",
              fontWeight: "bold",
              borderColor: "#FFC436",
            }}
          >
            خرید
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Box>
            <Typography variant="h6" sx={{ color: "#fff", pb: 2 }}>
              <span style={{ color: "rgb(255,172,25)" }}>کیف طلا:</span>
              <span>{walletDataToken.wallet_gold_data}&nbsp;گرم</span>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: "#fff", pb: 2 }}>
              <span style={{ color: "rgb(255,172,25)" }}>کیف پول:</span>
              <span>{walletDataToken.wallet_money_data}&nbsp;ریال</span>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default BuyGold;
