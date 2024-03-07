import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
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
  Typo2,
  WidtrawMainBox,
  WidtrawTypo,
  span_typo,
  widtra_input,
  widtra_paper,
  widtraw_button,
} from "./Style";
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const Withdraw = (props) => {
  const [open, setOpen] = React.useState(true);
  const [textFieldValue, setTextFieldValue] = React.useState("");
  const [cookies, setCookie] = useCookies(["token"]);

  const handleTextFieldChange = (event) => {
    const newValue = numeral(event.target.value).format("0,0");
    setTextFieldValue(newValue);
  };
  // useEffect(() => {
  //   Swal.fire({
  //     title:
  //       " در صورت ناموفق بودن برداشت!! \n 1)     موجودی کیف پول بررسی شود.\n 2) در غیر اینصورت با پشتیبانی تماس بگیرید",
  //     showClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeInUp
  //         animate__faster
  //       `,
  //     },
  //     hideClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeOutDown
  //         animate__faster
  //       `,
  //     },
  //   });
  // }, [1]);
  return (
    <Box sx={WidtrawMainBox}>
      <div style={{ maxWidth: "800px" }}>
        <Typography variant="h3" sx={WidtrawTypo}>
          {props.title}
        </Typography>
        <Paper sx={widtra_paper}>
          <Typography sx={Typo2}>{props.BoxTitle} :</Typography>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={themee}>
              <TextField
                id="outlined-start-adornment"
                sx={widtra_input}
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
                onChange={handleTextFieldChange}
                value={textFieldValue}
              />
              <Box display="flex" justifyContent="center">
                <Button
                  variant="outlined"
                  onClick={async (e) => {
                    e.preventDefault();
                    await axios
                      .post(
                        `${IPServer}/UserDashboard-GetRequest/get-request-money/`,
                        {
                          money_amount: textFieldValue,
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
                  sx={widtraw_button}
                >
                  {props.buttonText}
                </Button>
              </Box>
              <Typography variant="h6" sx={span_typo}>
                <span style={{ color: "rgb(255,172,25)" }}>
                  {props.walletcash}:
                </span>
                <span>
                  {numeral(props.WalletData.wallet_money_data).format("0,0")}
                  &nbsp;ریال
                </span>
              </Typography>
            </ThemeProvider>
          </CacheProvider>
        </Paper>
      </div>
    </Box>
  );
};

export default Withdraw;
