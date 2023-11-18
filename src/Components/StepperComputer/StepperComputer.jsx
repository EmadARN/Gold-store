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
    description: `
    با ثبت‌نام در گلدیکا برای شما یک کیف‌پول ریالی و یک کیف طلا ایجاد می‌شود. برای
    خرید طلا کافی است کیف پول خود را به میزان دلخواه شارژ کنید.`,
  },
  {
    id: 3,
    label: "خرید و فروش طلا",
    description: `بلافاصله پس از شارژ کیف پول می‌توانید طلا بخرید و یا اگر در کیف طلای خود طلا دارید، می‌توانید هر مقدار از آن را که می‌خواهید بفروشید.`,
  },
  {
    id: 4,
    label: " تسویه ریالی یا تحویل طلای فیزیکی",
    description: `با درخواست تسویه‌ی ریالی، هر میزان از موجودی کیف پول که می‌خواهید نهایتاً طی یک روز کاری به حساب بانکی شما واریز می‌شود. همچنین می‌توانید موجودی کیف طلایی خود را به صورت فیزیکی تحویل بگیرید.`,
  },
];

export default function StepperComputer() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [box, setBox] = React.useState(false);
  const totalSteps = () => {
    return steps.length;
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    setBox("#FFC436");
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
            }}
          >
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
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
                        width: "35px",
                        height: "30px",
                        bgcolor: activeStep == index ? box : "#fff",
                      }}
                      aria-label="add"
                    >
                      {label.id}
                    </Fab>
                    <Typography
                      sx={{
                        cursor: "pointer",
                        pl: 2,
                        color: activeStep == index ? box : null,
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
