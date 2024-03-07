import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Container, Fab } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { steps } from "./Utils/StepsObjext";
import {
  FirstBox,
  GoldBox,
  MapBox,
  SteperStyle,
  TypographyStyle,
} from "./Style";
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

export default function StepperComputer() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

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
        <Container maxWidth={"xl"}>
          <Box sx={FirstBox}>
            <Stepper
              nonLinear
              activeStep={activeStep}
              orientation="vertical"
              sx={SteperStyle}
            >
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <Box color="inherit" sx={MapBox} onClick={handleStep(index)}>
                    <Fab
                      sx={{
                        width: "15px",
                        height: "1px",
                        px: 1.8,

                        bgcolor: activeStep == index ? "#FFC436" : "#fff",
                      }}
                      aria-label="add"
                    >
                      {activeStep >= index + 1 ? <DoneIcon /> : label.id}
                    </Fab>
                    <Typography
                      sx={{
                        cursor: "pointer",
                        pl: 2,
                        color: activeStep == index ? "#FFC436" : "#fff",
                      }}
                    >
                      {label.label}
                    </Typography>
                  </Box>
                </Step>
              ))}
            </Stepper>

            <Box sx={GoldBox}>
              {/* {(activeStep % activeStep.length).toFixed()} */}
              {steps.map((label, index) => {
                if (activeStep === index) {
                  return (
                    <Typography sx={TypographyStyle}>
                      {label.description}
                    </Typography>
                  );
                }
              })}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}
