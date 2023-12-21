import { Box, styled } from "@mui/material";

import React, { useEffect, useState } from "react";
const Ul = styled("ul")(({ theme }) => ({
  position: "relative",
  maxWidth: "600px",
  width: "100%",
  height: "150px",
}));

const Li1 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  maxWidth: "160px",
  width: "100%",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: 0,
  margin: "50px",
  overfllow: "hidden",
  backgroundColor: "#1C1B19",
  border: "1px solid  #FFC436",
  "@media (max-width:707px)": {
    left: -30,
  },
  "@media (max-width:618px)": {
    left: -70,
  },
  "@media (max-width:544px)": {
    display: "none",
  },
}));
const Li2 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  maxWidth: "160px",
  width: "100%",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: "45%",
  margin: "-85px",
  overflow: "hidden",
  backgroundColor: "#FFC436",
  "@media (max-width:544px)": {
    left: "40%",
  },
}));
const Li3 = styled("li")(({ theme }) => ({
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
  "@media (max-width:544px)": {
    display: "none",
  },
}));

const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67UWgnzD-aAmzwNvIKAJwzCd2aw26fXMvpQ&usqp=CAU";

const Boxin1 = styled("div")(({ theme }) => ({
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
const Boxin2 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
const Boxin3 = styled("div")(({ theme }) => ({
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

const DimondHeader = () => {
  const [fade, setFadeOut] = React.useState(false);
  useEffect(() => {
    setFadeOut(true);
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "@media (min-width:912px)": {
          display: "none",
        },
      }}
    >
      <Ul
        sx={{
          opacity: fade ? 1 : 0,
          transition: fade ? "all 4s ease-in-out" : null,
          mb: 10,
        }}
      >
        <Li1 className="li1">
          <Boxin1>بازار 24 ساعته</Boxin1>
        </Li1>
        <Li2 className="li2">
          <Boxin2></Boxin2>
        </Li2>

        <Li3 className="li3">
          <Boxin3>امکان تحویل فیزیکی</Boxin3>
        </Li3>
      </Ul>
    </Box>
  );
};

export default DimondHeader;
