import { Box, Grid, styled } from "@mui/material";

import React, { useEffect, useState } from "react";
import ArrowBottom from "../ArrowBottom/ArrowBottom";
const Ul = styled("ul")(({ theme }) => ({
  position: "relative",
  width: "600px",
  height: "150px",
}));
const Li1 = styled("li")(({ theme }) => ({
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
const Li2 = styled("li")(({ theme }) => ({
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
const Li3 = styled("li")(({ theme }) => ({
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
const Li4 = styled("li")(({ theme }) => ({
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
const Li5 = styled("li")(({ theme }) => ({
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
const img1 =
  "https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrHpkH8cIJFiq2Np30koRYiwXaI2Uqi0Zvg&usqp=CAU";
const img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67UWgnzD-aAmzwNvIKAJwzCd2aw26fXMvpQ&usqp=CAU";
const Boxin1 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
}));

const Boxin2 = styled("div")(({ theme }) => ({
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
const Boxin3 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img2})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
const Boxin4 = styled("div")(({ theme }) => ({
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
const Boxin5 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
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
        "@media (max-width:912px)": {
          display: "none",
        },
      }}
    >
      <Ul
        sx={{
          opacity: fade ? 1 : 0,
          transition: fade ? "all 4s ease-in-out" : null,
        }}
      >
        <Li1 className="li1">
          <Boxin1></Boxin1>
        </Li1>
        <Grid sx={{}}>
          <ArrowBottom />
        </Grid>
        <Li2 className="li2">
          <Boxin2>بازار 24 ساعته</Boxin2>
        </Li2>
        <Li3 className="li3">
          <Boxin3></Boxin3>
        </Li3>

        <Li4 className="li4">
          <Boxin4>امکان تحویل فیزیکی</Boxin4>
        </Li4>

        <Li5 className="li5">
          <Boxin5></Boxin5>
        </Li5>
      </Ul>
    </Box>
  );
};

export default DimondHeader;
