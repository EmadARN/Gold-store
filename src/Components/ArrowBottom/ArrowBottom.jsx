import { Box, styled } from "@mui/material";
import React from "react";
const Span = styled("div")(({ theme }) => ({
  transform: "rotate(45deg)",
  animation: "Span1 2s  ease-out infinite ",
  "@keyframes Span1": {
    "0%": {
      borderBottom: "8px solid rgba(255, 196, 54, 1)",
      borderRight: "8px solid rgba(255, 196, 54, 1)",
      width: "15px",
      height: "15px",
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));
const Span2 = styled("div")(({ theme }) => ({
  transform: "rotate(45deg)",
  animation: "Span2 2s   ease-in-out infinite ",
  "@keyframes Span2": {
    "0%": {
      borderBottom: "8px solid rgba(255, 196, 54, 1)",
      borderRight: "8px solid rgba(255, 196, 54, 1)",
      width: "25px",
      height: "25px",
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));
const Span3 = styled("div")(({ theme }) => ({
  transform: "rotate(45deg)",
  animation: "Span3 2s  ease-in infinite ",
  "@keyframes Span3": {
    "0%": {
      borderBottom: "8px solid rgba(255, 196, 54, 1)",
      borderRight: "8px solid rgba(255, 196, 54, 1)",
      width: "35px",
      height: "35px",
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));
const ArrowBottom = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        mr: { xs: 8.3 },
        mt: { xs: 10, lg: 15, xl: 20 },
        "@media (max-width:912px)": {
          display: "none",
        },
      }}
    >
      <Span></Span>
      <Span2></Span2>
      <Span3></Span3>
    </Box>
  );
};

export default ArrowBottom;
