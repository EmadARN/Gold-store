import { Animate } from "@/Components/Animate/Animate";
import ArrowBottom from "@/Components/ArrowBottom/ArrowBottom";
import DimondHeader from "@/Components/DimondHeader/DimondHeader";
import StepperComputerList from "@/Components/StepperComputer";
import StepperList from "@/Components/StepperPhone";
import TabPriceList from "@/Components/TabPrice";
import Layout from "@/Containers/Layout";
import { Container, Grid } from "@mui/material";
import DimondHeaderMobile from "@/Components/DimondHeaderMobile/DimondHeaderMobile";
import React from "react";

const HomeLand = () => {
  return (
    <>
      <Layout>
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
              <TabPriceList />
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
      </Layout>
    </>
  );
};

export default HomeLand;
