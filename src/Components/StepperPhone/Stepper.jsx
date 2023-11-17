import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Fab, StepButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
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
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [box, setBox] = React.useState(false);
  const handleStep = (step) => () => {
    setActiveStep(step);
    setBox(true);
  };
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index} completed={completed[index]}>
                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  onClick={handleStep(index)}
                >
                  <Fab
                    sx={{ width: "35px", height: "30px" }}
                    aria-label="add"
                    color="inherit"
                  >
                    {step.id}
                  </Fab>
                  <Typography sx={{ cursor: "pointer", pl: 2 }}>
                    {step.label}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    boxShadow:
                      "#FFC436 0px 2px 30px,#FFC436 0px 7px 90px -3px,#FFC436 0px -3px 30px ",

                    bgcolor: "rgb(39,37,35)",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                >
                  <StepContent sx={{ pr: 5.5 }}>
                    <Typography sx={{ p: 3 }}>{step.description}</Typography>
                  </StepContent>
                </Box>
              </Step>
            ))}
          </Stepper>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
// boxShadow: "#FFC436 0px 22px 70px 4px"
