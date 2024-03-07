import {styled} from "@mui/material/styles";
import {img1, img2, img3} from "@/Components/DimondHeader/Data";
import React, {useEffect} from "react";

export const Ul = styled("ul")(({ theme }) => ({
  position: "relative",
  width: "600px",
  height: "150px",
}));
export const Li1 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  width: "160px",
  height: "160px",
  margin: "-85px",
  transform: "rotate(45deg)",
  top: 0,
  left: 0,
  transition: ".5s",
  overfllow: "hidden",
  backgroundColor: "#FFC436",
}));
export const Li2 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  width: "160px",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: "0%",
  margin: "50px",
  overfllow: "hidden",
  backgroundColor: "#1C1B19",
  border: "1px solid  #FFC436",
}));
export const Li3 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  width: "160px",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: "45%",
  margin: "-85px",
  overflow: "hidden",
  backgroundColor: "#FFC436",
}));
export const Li4 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  width: "160px",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: "45%",
  margin: "50px",
  overfllow: "hidden",
  backgroundColor: "#1C1B19",
  border: "1px solid  #FFC436",
}));
export const Li5 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  width: "160px",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: "90%",
  margin: "-85px",
  overfllow: "hidden",
  backgroundColor: "#FFC436",
}));
export const Boxin1 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
}));

export const Boxin2 = styled("div")(({ theme }) => ({
  transform: "rotate(-45deg)",
  position: "absolute",
  top: "60px",
  right: "40px",
  fontWeight: "bold",
  fontSize: "18px",
  color: "#fff",
  animation: "span4 1.5s ease-in-out infinite alternate",
  "@keyframes span4": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
      scale: "1.2",
    },
  },
  textShadow: "0px 2px 18px rgba(255, 196, 54, 1)",
}));
export const Boxin3 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img2})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
export const Boxin4 = styled("div")(({ theme }) => ({
  transform: "rotate(-45deg)",
  position: "absolute",
  top: "60px",
  right: "15px",
  fontWeight: "bold",
  fontSize: "18px",
  color: "#fff",
  animation: "span4 1.5s ease-in-out infinite alternate",
  "@keyframes span4": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
      scale: "1.2",
    },
  },
  textShadow: "0px 2px 18px rgba(255, 196, 54, 1)",
}));
export const Boxin5 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));

export const BoxOneSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width:912px)": {
    display: "none",
  },
}

