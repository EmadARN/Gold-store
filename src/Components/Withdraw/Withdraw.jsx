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
import numeral from "numeral";
import { IPServer } from "@/Config";
import axios from "axios";
import { useCookies } from "react-cookie";
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
  console.log(typeof textFieldValue);

  const handleTextFieldChange = (event) => {
    const newValue = numeral(event.target.value).format("0,0");
    setTextFieldValue(newValue);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div style={{ maxWidth: "800px" }}>
        <Typography
          variant="h3"
          sx={{ color: "#fff", fontWeight: "bold", my: 5, textAlign: "center" }}
        >
          {props.title}
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
            {props.BoxTitle} :
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
                      {props.inputLabel}
                    </InputAdornment>
                  ),
                }}
                onChange={handleTextFieldChange}
                value={textFieldValue}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  onClick={async (e) => {
                    e.preventDefault();
                    await axios
                      .post(
                        `${IPServer}/UserDashboard-GetRequest/get-request-money/`,
                        {
                          money_amount: textFieldValue.replace(",", ""),
                        },
                        {
                          headers: {
                            Authorization: `Token ${cookies.token}`,
                          },
                        }
                      )
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
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
                >
                  {props.buttonText}
                </Button>
              </Box>
              <Typography variant="h6" sx={{ color: "#fff", pb: 2 }}>
                <span style={{ color: "rgb(255,172,25)" }}>
                  {props.walletcash}:
                </span>
                <span>{props.WalletData.wallet_money_data}&nbsp;ریال</span>
              </Typography>
            </ThemeProvider>
          </CacheProvider>
        </Paper>
      </div>
    </Box>
  );
};

export default Withdraw;
