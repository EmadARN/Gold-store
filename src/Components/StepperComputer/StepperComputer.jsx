import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
const steps = [
  {
    id: 1,
    label: "ثبت نام و احراز هویت",
    description: `ثبت نام در گلدیار ساده بوده و در چند دقیقه اتفاق میافتد.نیازی نیست به جایی مراجعه کنید یا عکس یا فیلمی بارگزاری گنید.`,
  },
  {
    id: 2,
    label: "شارژ کیف پول",
    description: `ثبت نام در گلدیار ساده بوده و در چند دقیقه اتفاق میافتد.نیازی نیست به جایی مراجعه کنید یا عکس یا فیلمی بارگزاری گنید.`,
  },
  {
    id: 3,
    label: "خرید و فروش طلا",
    description: `ثبت نام در گلدیار ساده بوده و در چند دقیقه اتفاق میافتد.نیازی نیست به جایی مراجعه کنید یا عکس یا فیلمی بارگزاری گنید.`,
  },
  {
    id: 4,
    label: " تسویه ریالی یا تحویل طلای فیزیکی",
    description: `ثبت نام در گلدیار ساده بوده و در چند دقیقه اتفاق میافتد.نیازی نیست به جایی مراجعه کنید یا عکس یا فیلمی بارگزاری گنید.`,
  },
];

export default function StepperComputer() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label.label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            <React.Fragment>
              {steps.map((label, index) => (
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                  {label.description}
                </Typography>
              ))}
            </React.Fragment>
          </div>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
