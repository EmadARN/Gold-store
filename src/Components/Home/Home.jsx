import { Container, Grid } from "@mui/material";
import React from "react";
import DimondHeader from "../DimondHeader/DimondHeader";
import DimondHeaderMobile from "../DimondHeaderMobile/DimondHeaderMobile";
import { Animate } from "../Animate/Animate";
import StepperComputerList from "../StepperComputer";
import StepperList from "../StepperPhone";
import TabPrice from "../TabPrice/TabPrice";
import Home_page_desc from "../home-page-disription";
import Direct_Sign_up from "../directtosignup";

const HomeLand = ({ tabPrice }) => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid ml={10} mt={19} xs={12}>
          <DimondHeader />
          <DimondHeaderMobile />
        </Grid>

        <Grid
          sx={{ border: "2pxs olid red", mt: { xs: -12, md: 10 } }}
          width="100%"
        >
          <Home_page_desc />
          <Grid
            sx={{
              width: "100%",
              mt: 5,
            }}
            display="flex"
            justifyContent="center"
          >
            <Direct_Sign_up />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            my: { xs: 6, md: 12 },

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
              pt: { xs: 0, md: 4 },
            }}
          >
            <TabPrice tabPrice={tabPrice} />
          </Grid>
        </Grid>

        <Grid
          sx={{
            mb: { xs: 30, md: 20 },
            mt: { xs: 25, md: 40 },
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
