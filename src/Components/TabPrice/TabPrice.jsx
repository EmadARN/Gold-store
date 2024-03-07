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
import {
  BuyTypo,
  FormControlPaper,
  FormControlStyle,
  PaperBox,
  PaperBox2,
  RialBox,
  RialTypo,
  SellBox,
  SellRial,
  SellTypo,
  TabItem,
  TabItem2,
  TabPaper,
  TabPricePaper,
  TabsItem,
} from "./Style";
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
    <Paper sx={TabPricePaper}>
      <Box sx={PaperBox}>
        <Box>
          <Typography sx={BuyTypo}>قیمت خرید</Typography>
          <Box sx={RialBox}>
            {string2}

            <Typography sx={RialTypo}>ریال</Typography>
          </Box>
        </Box>
        <DiamondIcon
          sx={{
            color: "#FFC436",
            fontSize: "50px",
          }}
        />
        <Box>
          <Typography sx={SellTypo}>قیمت فروش</Typography>
          <Box sx={SellBox}>
            {string4}

            <Typography sx={SellRial}>ریال</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={PaperBox2}>
        <Paper elevation={10} sx={TabPaper}>
          <AppBar position="static" sx={{ borderRadius: "10px" }}>
            <Tabs
              sx={TabsItem}
              value={value}
              onChange={handleChange}
              indicatorColor="#FFC436"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                sx={TabItem(colorTab)}
                onClick={() => {
                  setGoldTextField(0), setTextFieldValue(0), setColorTab(false);
                }}
                label="خرید"
                {...a11yProps(0)}
              />
              <Tab
                sx={TabItem2(colorTab)}
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
              <Paper sx={FormControlPaper}>
                <FormControl
                  sx={FormControlStyle}
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
              <Paper sx={FormControlPaper}>
                <FormControl
                  onChange={(e) => goldTextFieldHandler(e)}
                  sx={FormControlStyle}
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
