import { Box, Grid, styled, useMediaQuery } from "@mui/material";

import React, { useEffect, useState } from "react";
import ArrowBottom from "../ArrowBottom/ArrowBottom";
import {
  Boxin1,
  Boxin2,
  Boxin3,
  Boxin4,
  Boxin5,
  Boxin6,
  Boxin7,
  BoxOneSx,
  Li1,
  Li2,
  Li3,
  Li4,
  Li5,
  Ul,
} from "@/Components/DimondHeader/Style";

const DimondHeader = () => {
  const [fade, setFadeOut] = React.useState(false);
  useEffect(() => {
    setFadeOut(true);
  });
  const isSmallScreen = useMediaQuery(
    "(min-width: 200px) and (max-width: 375px)"
  );
  const isSmallScreenPlus = useMediaQuery(
    "(min-width: 376px) and (max-width: 500px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width: 501px) and (max-width: 600px)"
  );
  const islargeScreen = useMediaQuery(
    "(min-width: 601px) and (max-width:700px)"
  );
  const isXlargeScreen = useMediaQuery(
    "(min-width: 701px) and (max-width:800px)"
  );
  const isXXlargeScreen = useMediaQuery(
    "(min-width: 801px) and (max-width:1200px)"
  );
  const isXXXlargeScreen = useMediaQuery("(min-width: 1250px) ");
  return (
    <Box sx={BoxOneSx}>
      <Ul
        sx={{
          opacity: fade ? 1 : 0,
          transition: fade ? "all 4s ease-in-out" : null,
        }}
      >
        <Box
          sx={Li1(
            isSmallScreen,
            isSmallScreenPlus,
            isMediumScreen,
            islargeScreen,
            isXlargeScreen,
            isXXlargeScreen,
            isXXXlargeScreen
          )}
          className="li1"
        >
          <Boxin1></Boxin1>
        </Box>
        <Grid sx={{}}>
          <ArrowBottom />
        </Grid>
        <Box
          sx={Li2(
            isSmallScreen,
            isSmallScreenPlus,
            isMediumScreen,
            islargeScreen,
            isXlargeScreen,
            isXXlargeScreen,
            isXXXlargeScreen
          )}
          className="li2"
        >
          {window.innerWidth < 600 ? (
            <Boxin6></Boxin6>
          ) : (
            <Boxin2
              sx={{
                fontWeight: { xs: "none", sm: "bold" },
                fontSize: { xs: "8px", sm: "15px", md: "16px", xl: "18px" },
              }}
            >
              بازار 24 ساعته
            </Boxin2>
          )}
        </Box>
        <Box
          sx={Li3(
            isSmallScreen,
            isSmallScreenPlus,
            isMediumScreen,
            islargeScreen,
            isXlargeScreen,
            isXXlargeScreen,
            isXXXlargeScreen
          )}
          className="li3"
        >
          <Boxin3></Boxin3>
        </Box>
        <Box
          sx={Li4(
            isSmallScreen,
            isSmallScreenPlus,
            isMediumScreen,
            islargeScreen,
            isXlargeScreen,
            isXXlargeScreen,
            isXXXlargeScreen
          )}
          className="li4"
        >
          {window.innerWidth < 600 ? (
            <Boxin7></Boxin7>
          ) : (
            <Boxin4
              sx={{
                fontWeight: { xs: "none", sm: "bold" },
                fontSize: { xs: "8px", sm: "15px", md: "16px", xl: "18px" },
              }}
            >
              امکان تحویل فیزیکی
            </Boxin4>
          )}
        </Box>
        <Box
          sx={Li5(
            isSmallScreen,
            isSmallScreenPlus,
            isMediumScreen,
            islargeScreen,
            isXlargeScreen,
            isXXlargeScreen,
            isXXXlargeScreen
          )}
          className="li5"
        >
          <Boxin5></Boxin5>
        </Box>
      </Ul>
    </Box>
  );
};

export default DimondHeader;
