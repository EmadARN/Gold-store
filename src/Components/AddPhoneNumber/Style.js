// AddPhoneNumberSx
import {createTheme} from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

export const GridOneSx = { mr: { xs: "8%", md: "0" } }
export const GridTwoSx = {
    display: { xs: "flex" },
    justifyContent: { xs: "center", md: "start" },
    alignItems: "center",
}
export const GridThreeSx = { display: { xs: "none", md: "flex" } }
export const BoxOneSx  ={
    border: "1px solid #FFC436",
    borderRadius: "10px",
    padding: "5px 10px",
    backgroundColor: "rgba(157, 121, 24,0.4)",
}
export const BoxtwoSx = {
    border: "1px solid #FFC436",
    borderRadius: "10px",
    padding: "5px 10px",
    backgroundColor: "rgba(157, 121, 24,0.4)",
}
export const BoxThreeSx = {
    border: "1px solid #FFC436",
    borderRadius: "10px",
    padding: "5px 10px",
    backgroundColor: "rgba(157, 121, 24,0.4)",
}
export const TypoOneSx = { display: { xs: "none", md: "flex" } }

export const GridFourSx  ={
    width: { xs: "100%", sm: "80%" },
    display: "flex",
    justifyContent: "center",
}
export const ButtonOneSx = {
    bgcolor: "#FFC436",
    color: "#000",
    fontSize: "18px",
    fontWeight: "bold",
    px: 10,
    transition: "all .3s ease-in ",
    "&:hover": {
        bgcolor: "#FFC436",
        letterSpacing: "2px",
        transition: "all .3s ease-in ",
    },
}


// TextFeildSX
const themee = createTheme({
    direction: "rtl",
});

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
});

export const TexFeildOneSx = {
    width: "100%",

    input: { color: "#fff", direction: "rtl", pr: 2 },
    label: { color: "#fff" },
    "& label.Mui-focused": {
        color: "#fff",
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
            borderColor: "#fff",
        },
    },
}
export const ButtonTextSx = {
    fontSize: "15px",
    fontWeight: "bold",
    ml: 2,
    color: "#111",
    borderRadius: "9px",
    border: "1px solid #FFC436",
    backgroundColor: "#FFC436",
    "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
}