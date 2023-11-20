import HomePhoneNumber from "@/Components/AddPhoneNumber";
import StepperComputerList from "@/Components/StepperComputer";
import StepperList from "@/Components/StepperPhone";
import TabPriceList from "@/Components/TabPrice";
import Layout from "@/Containers/Layout";
import { Container, Grid } from "@mui/material";
import React from "react";

const HomeLand = () => {
  return (
    <>
      <Layout>
        <Container maxWidth="xl">
          <Grid container justifyContent="space-around">
            <Grid item xs={12} md={6}>
              <HomePhoneNumber />
            </Grid>
            <Grid item xs={12} md={6}>
              <TabPriceList />
            </Grid>
          </Grid>

          <Grid mb={20} mt={20}>
            <StepperComputerList />
            <StepperList />
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default HomeLand;
