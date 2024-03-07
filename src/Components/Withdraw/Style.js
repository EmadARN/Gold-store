export const WidtrawMainBox = {
    display: "flex", justifyContent: "center", alignItems: "center" 
}

export const WidtrawTypo ={
    color: "#fff",
    fontWeight: "bold",
    my: 5,
    textAlign: "center",
    fontFamily: "Yekan",
    fontSize: { xs: "36px", md: "45px" },
}


export const widtra_paper ={
    bgcolor: "#272523",
    width: "100%",

    borderRadius: "10px",
    height: "100%",
    px: 6,
}


export const Typo2 ={
    color: "#fff", fontSize: "20px", py: 3
}


export const widtra_input ={
    width: "100%",

    input: { color: "#FFC436", direction: "rtl", pr: 2 },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFC436",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#272523",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "& fieldset": {
        borderColor: "#fff",
        borderRadius: "8px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(255,172,25)",
      },
    },
}


export const widtraw_button ={
    width: "100%",
    fontSize: "16px",
    fontWeight: "bold",
    my: 5,
    mx: { xs: 2, md: 10 },
    borderRadius: "7px",
    color: "rgb(255,172,25)",
    borderColor: "rgb(255,172,25)",
    "&:hover": {
      borderColor: "rgb(255,172,25)",
    },
}


export const span_typo ={
    color: "#fff", pb: 2 
}