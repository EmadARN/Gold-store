export const FirstBox ={
    display: "flex", justifyContent: "center", alignItems: "center"
}


export const get_gold_typo ={
    color: "#fff", fontWeight: "bold", my: 5, fontFamily:'Yekan',textAlign: "center",fontSize:{xs:"33px",md:'40px'}
}


export const withdraw_gold_paper = {
    bgcolor: "#272523",
    width: "100%",

    borderRadius: "10px",
    height: "100%",
    px: 6,
}


export const widthraw_gold_input ={
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


export const get_button ={
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


export const last_typo ={
    color: "#fff", pb: 2 
}