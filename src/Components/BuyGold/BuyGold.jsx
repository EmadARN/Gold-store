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
import {
  AppSX,
  BButtonThreeSx,
  BoxOneSx,
  BoxThreeSx,
  BoxTwoSx,
  FormCntrlSx,
  FormCntrolSx,
  PaperFourSx,
  PaperOneSx,
  PaperThreeSx,
  PapertwoSx,
  SpanSx,
  Typo2vs3,
  TypoFiveVsSixSX,
  TypoOneSx,
  TypoThreeSX,
  TypoTwo,
} from "@/Components/BuyGold/Style";
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
  const [cookies] = useCookies(["token"]);
  const [textFieldValue, setTextFieldValue] = React.useState();
  const [goldTextField, setGoldTextField] = React.useState();

  var string1 = numeral(goldStockPrice.buy_price);
  var string2 = string1.format("0,0");

  // onChange Price
  const handleTextFieldChange = (event) => {
    var newValue = numeral(event.target.value);
    var newValueFormat = newValue.format("0,0");
    setTextFieldValue(newValueFormat);

    const goldValue =
      parseFloat(newValue.value()) / parseFloat(string1.value());

    setGoldTextField(goldValue.toFixed(3));

    if (newValueFormat == 0) {
      setGoldTextField(0);
    }
  };

  //onChange Gold
  const goldTextFieldHandler = (event) => {
    const newValue = event.target.value;
    setGoldTextField(newValue);

    const goldValue = parseFloat(newValue) * parseFloat(string1.value());
    setTextFieldValue(numeral(goldValue).format("0,0"));
  };

  return (
    <Box sx={BoxOneSx}>
      <Paper sx={PaperOneSx}>
        <Box>
          <Paper elevation={10} sx={PapertwoSx}>
            <AppBar position="static" sx={AppSX}>
              <Box sx={BoxTwoSx}>
                <Typography sx={TypoOneSx}>قیمت خرید:</Typography>
                <Typography sx={TypoTwo}>{string2}</Typography>
                <Typography sx={TypoThreeSX}>ریال</Typography>
              </Box>
            </AppBar>
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={themee}>
                <Paper sx={PaperThreeSx}>
                  <FormControl
                    sx={FormCntrolSx}
                    onChange={(e) => handleTextFieldChange(e)}
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      ارزش کل
                    </InputLabel>
                    <OutlinedInput
                      value={textFieldValue}
                      id="outlined-adornment-amount"
                      endAdornment={
                        <InputAdornment sx={InputAdornment} position="start">
                          ریال
                        </InputAdornment>
                      }
                      label="Amount"
                    />
                  </FormControl>
                </Paper>
                <Paper sx={PaperFourSx}>
                  <FormControl
                    onChange={(e) => goldTextFieldHandler(e)}
                    sx={FormCntrlSx}
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      مقدار طلا
                    </InputLabel>
                    <OutlinedInput
                      value={goldTextField}
                      id="outlined-adornment-amount"
                      endAdornment={
                        <InputAdornment sx={InputAdonmentSx} position="start">
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

        <Box sx={BoxThreeSx}>
          <Button
            onClick={async (e) => {
              e.preventDefault();

              await axios
                .post(
                  `${IPServer}/UserDashboard-GoldBuySale/buy-gold/`,
                  {
                    gold_amount: parseFloat(goldTextField),
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
            variant="outlined"
            value={value}
            index={0}
            dir={theme.direction}
            sx={BButtonThreeSx}
          >
            خرید
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Box>
            <Typography variant="h6" sx={TypoFiveVsSixSX}>
              <span style={SpanSx}>کیف طلا:</span>
              <span>{walletDataToken.wallet_gold_data}&nbsp;گرم</span>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={TypoFiveVsSixSX}>
              <span style={SpanSx}>کیف پول:</span>
              <span>
                {numeral(walletDataToken.wallet_money_data).format("0,0")}
                &nbsp;ریال
              </span>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default BuyGold;
