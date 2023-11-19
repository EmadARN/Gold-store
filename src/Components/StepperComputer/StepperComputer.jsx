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
import { Container, Fab } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { steps } from "../../Utils/StepsObjext";
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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              "@media (max-width:912px)": {
                display: "none",
              },
            }}
          >
            <Stepper
              nonLinear
              activeStep={activeStep}
              orientation="vertical"
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <Box
                    color="inherit"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={handleStep(index)}
                  >
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

            <Box
              sx={{
                boxShadow:
                  "#FFC436 0px 2px 30px,#FFC436 0px 7px 90px -3px,#FFC436 0px -3px 30px ",

                bgcolor: "rgb(39,37,35)",
                borderRadius: "8px",
                color: "#fff",
                width: "30%",
              }}
            >
              {/* {(activeStep % activeStep.length).toFixed()} */}
              {steps.map((label, index) => {
                if (activeStep === index) {
                  return (
                    <Typography sx={{ mt: 2, mb: 1, p: 2 }}>
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
