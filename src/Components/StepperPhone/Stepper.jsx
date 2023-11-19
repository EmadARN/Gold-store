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
import { steps } from "../../Utils/StepsObjext";

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
        <Box
          sx={{
            maxWidth: 500,
            "@media (min-width:912px)": {
              display: "none",
            },
          }}
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={handleStep(index)}
                >
                  {activeStep == index ? (
                    <Box
                      sx={{
                        boxShadow:
                          "#FFC436 0px 2px 30px,#FFC436 0px 7px 90px -3px,#FFC436 0px -3px 30px ",

                        bgcolor: "rgb(39,37,35)",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Fab
                          sx={{
                            width: "15px",
                            height: "1px",
                            px: 1.8,
                            color: activeStep == index ? "#111" : "#fff",
                            bgcolor: activeStep == index ? "#FFC436" : "#fff",
                          }}
                          aria-label="add"
                          color="inherit"
                        >
                          {activeStep >= index + 1 ? <DoneIcon /> : step.id}
                        </Fab>
                        <Typography
                          sx={{
                            cursor: "pointer",
                            pl: 2,
                            color: activeStep == index ? "#FFC436" : "#fff",
                          }}
                        >
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
                        sx={{
                          width: "15px",
                          height: "1px",
                          px: 1.8,

                          bgcolor: activeStep == index ? "#FFC436" : "#fff",
                        }}
                        aria-label="add"
                        color="inherit"
                      >
                        {activeStep >= index + 1 ? <DoneIcon /> : step.id}
                      </Fab>
                      <Typography
                        sx={{
                          cursor: "pointer",
                          pl: 2,
                          color: activeStep == index ? "#FFC436" : "#fff",
                        }}
                      >
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
