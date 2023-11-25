import { Box, Button, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.js";
const Cotainer = styled("div")(({ theme }) => ({
  minWidth: "400px",
  width: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
}));
const DivOne = styled("div")(({ theme }) => ({
  position: "relative",
  width: "40px",
  height: "40px",
  backgroundColor: "#FFC436",
  scale: "0.45",
}));

export const Animate = () => {
  const animation = useRef(null);
  useEffect(() => {
    const animation = anime.timeline({
      targets: ".divs",
      loop: true,
      easing: "easeInOutExpo",
      delay: anime.stagger(100, { grid: [10, 10], from: "center" }),

      opacity: 1,
    });
    animation
      .add({
        rotateZ: 180,
        translateY: anime.stagger(-10, {
          grid: [10, 10],
          from: "center",
          axis: "y",
        }),
        translateX: anime.stagger(5, {
          grid: [10, 10],
          from: "center",
          axis: "x",
        }),
      })
      .add({
        borderRadius: "50%",
      })
      .add({
        opacity: 0.2,
        scale: 0.2,
      })
      .add({
        rotateZ: 180,
        opacity: 1,
        translateY: anime.stagger(10, {
          grid: [10, 10],
          from: "center",
          axis: "y",
        }),
        translateX: anime.stagger(-20, {
          grid: [10, 10],
          from: "center",
          axis: "x",
        }),
      })
      .add({
        translateY: anime.stagger(0, {
          grid: [10, 10],
          from: "center",
          axis: "y",
        }),
        translateX: anime.stagger(0, {
          grid: [10, 10],
          from: "center",
          axis: "x",
        }),
        scale: 1.5,
        borderRadius: "0",
      })
      .add({
        rotateZ: -90,
        scale: "0.45",
      });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        mt: 12,
      }}
    >
      <Cotainer>
        {Array.from({ length: 100 }, ( i) => (
          <DivOne className="divs " key={i} />
        ))}
      </Cotainer>
    </Box>
  );
};
