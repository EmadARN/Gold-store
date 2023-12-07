import { Container, Grid } from "@mui/material";
import React from "react";
import DimondHeader from "../DimondHeader/DimondHeader";
import DimondHeaderMobile from "../DimondHeaderMobile/DimondHeaderMobile";
import ArrowBottom from "../ArrowBottom/ArrowBottom";
import { Animate } from "../Animate/Animate";
import StepperComputerList from "../StepperComputer";
import StepperList from "../StepperPhone";
import TabPrice from "../TabPrice/TabPrice";

const HomeLand = ({ tabPrice }) => {
  return (
    <>
    
        <Container maxWidth="xl">
          <Grid ml={10} my={24} xs={12}>
            <DimondHeader />
            <DimondHeaderMobile />
          </Grid>
          <Grid
            ml={5}
            mt={8}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <ArrowBottom />
          </Grid>
          <Grid
            container
            sx={{
              my: { xs: -20, md: 24 },

              flexDirection: { xs: "column-reverse", md: "row" },
              "@media (max-width:1116px) and (min-width:900px)": {
                flexDirection: "column",
                display: "grid",
                placeItems: "center",
              },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Animate />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                "@media (max-width:1116px) and (min-width:900px)": {
                  ml: 12,
                },
              }}
            >
              <TabPrice tabPrice={tabPrice} />
            </Grid>
          </Grid>

          <Grid
            sx={{
              mb: { xs: 30, md: 20 },
              mt: { xs: 40, md: 40 },
              display: "grid",
              placeItems: "center",
            }}
          >
            <StepperComputerList />
            <StepperList />
          </Grid>
        </Container>
    
    </>
  );
};

export default HomeLand;
