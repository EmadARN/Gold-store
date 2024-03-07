import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { Fab, StepButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import DoneIcon from "@mui/icons-material/Done";
import { steps } from "./Utils/StepsObjext";
import { BoxGold2, FabStyle, FlexBox, MainBox, TypographyStyle } from "./Style";

const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (activeStep >= 3) {
        setActiveStep(0);
      } else {
        setActiveStep(activeStep + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeStep]);
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Box sx={MainBox}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <Box sx={FlexBox} onClick={handleStep(index)}>
                  {activeStep == index ? (
                    <Box sx={BoxGold2}>
                      <Box sx={FlexBox}>
                        <Fab
                          sx={FabStyle(activeStep, index)}
                          aria-label="add"
                          color="inherit"
                        >
                          {activeStep >= index + 1 ? <DoneIcon /> : step.id}
                        </Fab>
                        <Typography sx={TypographyStyle(activeStep, index)}>
                          {step.label}
                        </Typography>
                      </Box>
                      <StepContent>
                        <Typography sx={{ py: 1.5 }}>
                          {step.description}
                        </Typography>
                      </StepContent>
                    </Box>
                  ) : (
                    <>
                      <Fab
                        sx={FabStyle(activeStep, index)}
                        aria-label="add"
                        color="inherit"
                      >
                        {activeStep >= index + 1 ? <DoneIcon /> : step.id}
                      </Fab>
                      <Typography sx={TypographyStyle(activeStep, index)}>
                        {step.label}
                      </Typography>
                    </>
                  )}
                </Box>
              </Step>
            ))}
          </Stepper>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
