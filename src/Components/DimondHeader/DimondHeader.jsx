import { Box, Grid, styled } from "@mui/material";

import React, { useEffect, useState } from "react";
import ArrowBottom from "../ArrowBottom/ArrowBottom";
import {
    Boxin1,
    Boxin2,
    Boxin3,
    Boxin4,
    Boxin5,
    BoxOneSx,
    Li1,
    Li2,
    Li3,
    Li4,
    Li5,
    Ul
} from "@/Components/DimondHeader/Style";


const DimondHeader = () => {
  const [fade, setFadeOut] = React.useState(false);
  useEffect(() => {
    setFadeOut(true);
  });
  return (
    <Box
      sx={BoxOneSx}
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
