import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Paper, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import DiamondIcon from "@mui/icons-material/Diamond";
import numeral from "numeral";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
const TabPrice = ({ tabPrice }) => {
  const [tabPrice1, setTabPrice1] = React.useState({ tabPrice });
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [textFieldValue, setTextFieldValue] = React.useState();
  const [goldTextField, setGoldTextField] = React.useState();
  const [colorTab, setColorTab] = React.useState(false);

  //change TabIndex
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // onChange Price
  const handleTextFieldChange = (event) => {
    var newValue = numeral(event.target.value);
    var newValueFormat = newValue.format("0,0");
    setTextFieldValue(newValueFormat);

    if (value == 0) {
      const goldValue =
        parseFloat(newValue.value()) / parseFloat(string1.value());

      setGoldTextField(goldValue.toFixed(3));
    } else {
      const goldValue =
        parseFloat(newValue.value()) / parseFloat(string3.value());

      setGoldTextField(goldValue.toFixed(3));
    }
    if (newValueFormat == 0) {
      setGoldTextField(0);
    }
  };

  //onChange Gold
  const goldTextFieldHandler = (event) => {
    const newValue = event.target.value;
    setGoldTextField(newValue);

    if (value == 0) {
      const goldValue = parseFloat(newValue) * parseFloat(string1.value());
      setTextFieldValue(numeral(goldValue).format("0,0"));
    } else {
      const goldValue = parseFloat(newValue) * parseFloat(string3.value());
      setTextFieldValue(numeral(goldValue).format("0,0"));
    }
  };

  //Format PriceTab
  var string1 = numeral(tabPrice1.tabPrice.buy_price);
  var string2 = string1.format("0,0");
  var string3 = numeral(tabPrice1.tabPrice.sale_price);
  var string4 = string3.format("0,0");

  return (
    <Paper
      sx={{
        maxWidth: "550px",
        width: { xs: "100%", md: "550px" },
        margin: "auto",
        mt: 10,
        bgcolor: " rgba(39,37,35,.55)",

        boxShadow:
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        borderRadius: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          pt: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              textAlign: "center",
              fontSize: { xs: "20px", md: "30px" },
            }}
          >
            قیمت خرید
          </Typography>
          <Box
            sx={{
              color: "green",
              display: "flex",
              fontSize: { xs: "15px", md: "20px" },
              alignItems: "center",
              pr: { xs: 2, md: 1 },
            }}
          >
            {string2}

            <Typography
              sx={{
                color: "green",
                pr: 1,
                fontSize: { xs: "14px", md: "20px" },
              }}
            >
              ریال
            </Typography>
          </Box>
        </Box>
        <DiamondIcon
          sx={{
            color: "#FFC436",
            fontSize: "50px",
          }}
        />
        <Box>
          <Typography
            sx={{
              color: "#fff",
              textAlign: "center",
              fontSize: { xs: "20px", md: "30px" },
            }}
          >
            قیمت فروش
          </Typography>
          <Box
            sx={{
              color: "red",
              display: "flex",
              fontSize: { xs: "15px", md: "20px" },
              alignItems: "center",
              pl: { xs: 2, md: 1 },
            }}
          >
            {string4}

            <Typography
              sx={{ color: "red", pr: 1, fontSize: { xs: "14px", md: "20px" } }}
            >
              ریال
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "auto", px: 3, pt: 5, borderRadius: "15px" }}>
        <Paper
          elevation={10}
          sx={{
            height: "250px",
            bgcolor: "#3C3A36",

            width: { xs: "100%", md: "100%" },
            borderRadius: "30px",
            boxShadow:
              "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
            inset: "20px",
          }}
        >
          <AppBar position="static" sx={{ borderRadius: "10px" }}>
            <Tabs
              sx={{
                bgcolor: "#3C3A36",

                width: { xs: "100%", md: "100%" },
                borderRadius: "10px",
                "& .MuiButtonBase-root": {
                  color: "#FFC436",
                  fontSize: "20px",
                  fontWeight: "bold",
                },
              }}
              value={value}
              onChange={handleChange}
              indicatorColor="#FFC436"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                sx={{
                  bgcolor: colorTab ? null : "#FFC436 !important",
                  color: colorTab ? null : "#444 !important",
                }}
                onClick={() => {
                  setGoldTextField(0), setTextFieldValue(0), setColorTab(false);
                }}
                label="خرید"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  bgcolor: colorTab ? "#FFC436 !important" : null,
                  color: colorTab ? "#444 !important" : null,
                }}
                onClick={() => {
                  setGoldTextField(0), setTextFieldValue(0), setColorTab(true);
                }}
                label="فروش"
                {...a11yProps(1)}
              />
            </Tabs>
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
                  onChange={handleTextFieldChange}
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
                  onChange={(e) => goldTextFieldHandler(e)}
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
                    value={goldTextField}
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

    </Paper>
  );
};

export default TabPrice;
