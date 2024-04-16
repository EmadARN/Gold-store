import { Visibility } from "@mui/icons-material";

export const BoxOneSx = {
  margin: "auto",
  display: "block",
  textAlign: "center",
  mb: 10,
};
export const typoOneSx = { color: "#fff", fontWeight: "bold" };
export const GridOneSx = { display: "grid", placeItems: "center" };
export const PaperOneSx = {
  bgcolor: "#272523",
  maxWidth: "280px",
  width: "100%",
  borderRadius: "7px",
  height: "280px",
  p: 4,
  my: 2,
  pr: 3,
};
export const TypoTwoSx = { color: "#fff" };
export const TypoThreeSx = (vs)=>
{ const S4 ={color: "gray" ,Visibility:vs}
return S4
}; //visibility: obj.visibility*
export const TypoFourSx = { color: "#fff", textAlign: "end", py: 3 };
export const BoxTwoSx = { display: "flex", justifyContent: "center" };
export const buttononeSx = (bg,dis)=>{

  const S2 ={
    width: "80%",
    my: 1,
    fontWeight: "600",
    fontSize: { xs: "18px", md: "22px" },
    color: "#222",
    // bgcolor: obj.btnColor,
    display: dis,
    "&:hover": {
       bgcolor:bg,
      opacity: 0.8,
    },
    whiteSpace: "nowrap",
    backgroundColor :bg,
  
  }

  return S2

};
