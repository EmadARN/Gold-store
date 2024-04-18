import { styled } from "@mui/material/styles";
import { img1, img2, img3 } from "@/Components/DimondHeader/Data";
import React, { useEffect } from "react";

export const Ul = (
  fade,
  isSmallScreen,
  isSmallScreenPlus,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    position: "relative",
    width: isSmallScreen
      ? "500px"
      : isSmallScreenPlus
      ? "550px"
      : isMediumScreen
      ? "500px"
      : islargeScreen
      ? "540px"
      : isXlargeScreen
      ? "560px"
      : isXXlargeScreen
      ? "600px"
      : isXXXlargeScreen
      ? "600px"
      : "600px",
    height: isSmallScreen
      ? "190px"
      : isSmallScreenPlus
      ? "210px"
      : isMediumScreen
      ? "250px"
      : islargeScreen
      ? "250px"
      : isXlargeScreen
      ? "250px"
      : isXXlargeScreen
      ? "240px"
      : isXXXlargeScreen
      ? "150px"
      : "150px",
    opacity: fade ? 1 : 0,
    transition: fade ? "all 4s ease-in-out" : null,
  };
  return style;
};
export const Li1 = (
  isSmallScreen,
  isSmallScreenPlus,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    height: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    margin: isSmallScreen
      ? "-25px"
      : isSmallScreenPlus
      ? "-30px"
      : isMediumScreen
      ? "-35px"
      : islargeScreen
      ? "-55px"
      : isXlargeScreen
      ? "-65px"
      : isXXlargeScreen
      ? "-85px"
      : isXXXlargeScreen
      ? "-85px"
      : "-85px",
    transform: "rotate(45deg)",
    top: 0,
    left: isSmallScreen
      ? "-12%"
      : isSmallScreenPlus
      ? "-6%"
      : isMediumScreen
      ? "0%"
      : islargeScreen
      ? 0
      : isXlargeScreen
      ? 0
      : isXXlargeScreen
      ? 0
      : isXXXlargeScreen
      ? 0
      : 0,
    transition: ".5s",
    overfllow: "hidden",
    backgroundColor: "#FFC436",
  };
  return style;
};
export const Li2 = (
  isSmallScreen,
  isSmallScreenPlus,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    height: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: 0,
    left: isSmallScreen
      ? "-10%"
      : isSmallScreenPlus
      ? "-6%"
      : isMediumScreen
      ? "0%"
      : islargeScreen
      ? 0
      : isXlargeScreen
      ? 0
      : isXXlargeScreen
      ? 0
      : isXXXlargeScreen
      ? 0
      : 0,
    margin: isSmallScreen
      ? "35px"
      : isSmallScreenPlus
      ? "35px"
      : isMediumScreen
      ? "50px"
      : islargeScreen
      ? "50px"
      : isXlargeScreen
      ? "50px"
      : isXXlargeScreen
      ? "50px"
      : isXXXlargeScreen
      ? "50px"
      : "50px",
    overfllow: "hidden",
    backgroundColor: "#1C1B19",
    border: "1px solid  #FFC436",
  };
  return style;
};
export const Li3 = (
  isSmallScreen,
  isSmallScreenPlus,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    height: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: 0,
    left: isSmallScreen
      ? "35%"
      : isSmallScreenPlus
      ? "34%"
      : isMediumScreen
      ? "40%"
      : islargeScreen
      ? "42%"
      : isXlargeScreen
      ? "38%"
      : isXXlargeScreen
      ? "45%"
      : isXXXlargeScreen
      ? "45%"
      : "45%",
    margin: isSmallScreen
      ? "-27px"
      : isSmallScreenPlus
      ? "-25px"
      : isMediumScreen
      ? "-39px"
      : islargeScreen
      ? "-55px"
      : isXlargeScreen
      ? "-63px"
      : isXXlargeScreen
      ? "-85px"
      : isXXXlargeScreen
      ? "-85px"
      : "-85px",
    overflow: "hidden",
    backgroundColor: "#FFC436",
  };
  return style;
};
export const Li4 = (
  isSmallScreen,
  isSmallScreenPlus,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    height: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: 0,
    left: isSmallScreen
      ? "35%"
      : isSmallScreenPlus
      ? "37%"
      : isMediumScreen
      ? "40%"
      : islargeScreen
      ? "40%"
      : isXlargeScreen
      ? "40%"
      : isXXlargeScreen
      ? "47%"
      : isXXXlargeScreen
      ? "47%"
      : "47%",
    margin: isSmallScreen
      ? "34px"
      : isSmallScreenPlus
      ? "37px"
      : isMediumScreen
      ? "50px"
      : islargeScreen
      ? "50px"
      : isXlargeScreen
      ? "45px"
      : isXXlargeScreen
      ? "45px"
      : isXXXlargeScreen
      ? "46px"
      : "46px",
    overfllow: "hidden",
    backgroundColor: "#1C1B19",
    border: "1px solid  #FFC436",
  };
  return style;
};
export const Li5 = (
  isSmallScreen,
  isSmallScreenPlus,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    height: isSmallScreen
      ? "60px"
      : isSmallScreenPlus
      ? "70px"
      : isMediumScreen
      ? "90px"
      : islargeScreen
      ? "120px"
      : isXlargeScreen
      ? "140px"
      : isXXlargeScreen
      ? "160px"
      : isXXXlargeScreen
      ? "160px"
      : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: 0,
    left: isSmallScreen
      ? "80%"
      : isSmallScreenPlus
      ? "76%"
      : isMediumScreen
      ? "78%"
      : islargeScreen
      ? "84%"
      : isXlargeScreen
      ? "82%"
      : isXXlargeScreen
      ? "91%"
      : isXXXlargeScreen
      ? "91%"
      : "91%",
    margin: isSmallScreen
      ? "-20px"
      : isSmallScreenPlus
      ? "-28px"
      : isMediumScreen
      ? "-34px"
      : islargeScreen
      ? "-55px"
      : isXlargeScreen
      ? "-70px"
      : isXXlargeScreen
      ? "-85px"
      : isXXXlargeScreen
      ? "-85px"
      : "-84px",
    overfllow: "hidden",
    backgroundColor: "#FFC436",
  };
  return style;
};

export const Boxin1 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
}));

export const Boxin2 = styled("div")(({ theme }) => ({
  transform: "rotate(-45deg)",
  position: "absolute",
  top: window.innerWidth < 578 ? "25px" : "60px",
  right: window.innerWidth < 578 ? "16px" : "40px",

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
export const Boxin4 = styled("div")(({ theme }) => ({
  transform: "rotate(-45deg)",
  position: "absolute",
  top: window.innerWidth < 578 ? "25px" : "60px",
  right: window.innerWidth < 578 ? "16px" : "40px",
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

export const Boxin5 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));

export const Boxin6 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
export const Boxin7 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
export const BoxOneSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // "@media (max-width:912px)": {
  //   display: "none",
  // },
};
