import { Box, styled } from "@mui/material";

import React, { useEffect, useState } from "react";
import {Boxin1, Boxin2, Boxin3, Li1, Li2, Li3, Ul} from "@/Components/DimondHeader/Style";

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
