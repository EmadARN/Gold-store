import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Paper, TextField, styled } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

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
const TabPrice = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500, margin: "auto" }}>
      <Paper
        elevation={10}
        sx={{
          height: "300px",
          bgcolor: "#3C3A36",
        }}
      >
        <AppBar position="static" sx={{ borderRadius: "10px" }}>
          <Tabs
            sx={{
              bgcolor: "#3C3A36",

              borderRadius: "10px",
              "& .MuiButtonBase-root": {
                color: "#FFC436",
                fontSize: "20px",
              },
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="#FFC436"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="خرید" {...a11yProps(0)} />
            <Tab label="فروش" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={themee}>
            <Paper
              sx={{
                mt: 3,
                bgcolor: "#272523",
                width: "90%",
                borderRadius: "10px",
                mx: "auto",
              }}
            >
              <FormControl
                sx={{
                  width: "100%",

                  input: { color: "#FFC436", direction: "rtl", pr: 2 },
                  label: { color: "#FFC436" },
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
                  ارزش کل
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  endAdornment={
                    <InputAdornment
                      sx={{
                        "& .MuiTypography-root": {
                          color: "#FFC436",
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
                width: "90%",
                borderRadius: "10px",
                mx: "auto",
              }}
            >
              <FormControl
                sx={{
                  width: "100%",

                  input: { color: "#FFC436", direction: "rtl", pr: 2 },
                  label: { color: "#FFC436", fontWeight: "bold" },
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
                          color: "#FFC436",
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
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              value={value}
              index={0}
              dir={theme.direction}
              sx={{
                "&:hover": {
                  borderColor: "#FFC436",
                },
                mt: 3,
                width: "80%",
                color: "#FFC436",
                fontSize: "20px",
                fontWeight: "bold",
                borderColor: "#FFC436",
              }}
            >
              خرید
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              value={value}
              index={1}
              dir={theme.direction}
              sx={{
                "&:hover": {
                  borderColor: "#FFC436",
                },

                mt: 3,
                width: "80%",
                color: "#FFC436",
                fontSize: "20px",
                fontWeight: "bold",
                borderColor: "#FFC436",
              }}
            >
              فروش
            </Button>
          </Box>
        </SwipeableViews>
      </Paper>
    </Box>
  );
};

export default TabPrice;
