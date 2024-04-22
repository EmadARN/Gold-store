export const MainBox = {
  maxWidth: 500,
  "@media (min-width:912px)": {
    display: "none",
  },
};

export const BoxGold2 = {
  filter: "drop-shadow(0px 0px 15px #FFC436)",

  bgcolor: "rgb(39,37,35)",
  borderRadius: "8px",
  color: "#fff",
};

export const FlexBox = {
  display: "flex",
  alignItems: "center",
};

export const FabStyle = (activeStep, index) => {
  const S1 = {
    width: "15px",
    height: "1px",
    px: 1.8,
    color: activeStep == index ? "#fff" : "#111",
    bgcolor: activeStep == index ? "#FFC436" : "#fff",
  };
  return S1;
};

export const TypographyStyle = (activeStep, index) => {
  const S2 = {
    cursor: "pointer",
    pl: 2,
    color: activeStep == index ? "#FFC436" : "#fff",
  };

  return S2;
};
