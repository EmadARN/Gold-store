export const MainGrid = {
  minHeight: "100vh !important",
  height: "auto !important",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  backgroundImage: `url(${bg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const ContentGrid = {
  backgroundColor: "rgba(255,255,255,0.1)",
  WebkitBackdropFilter: "blur(7px) !important",
  backdropFilter: { xs: "blur(7px)", md: "blur(10px)" },
  boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
  border: "1px solid rgba(255,255,255,0.5)",
  maxHeight: "70%",
  maxWidth: { xs: "90%", md: "100%" },
  mt: 4,
  borderRadius: "10px",
  maxHeight: "550px !important",
  height: "auto !important",
};

export const FirstBox = {
  my: 20,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const InputStyle = {
  width: "100%",

  input: { color: "#fff", direction: "rtl", pr: 2 },
  label: { color: "#fff", fontSize: "17px", fontFamily: "Yekan" },
  "& label.Mui-focused": {
    color: "#FFC436",
    fontWeight: "bold",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFC436",
    },
  },
};

export const ButtonBox = {
  width: "50%",
  display: "flex",
  justifyContent: "center",
};

export const ButtonStyle = {
  width: "60%",
  mt: 3,
  mb: 2,
  backgroundColor: "#FFC436",
  color: "#111",
  fontWeight: "bold",
  "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
};

export const ButtonStyle2 = {
  mt: 3,
  mb: 2,
  backgroundColor: "#FFC436",
  color: "#111",
  fontWeight: "bold",
  "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
};
