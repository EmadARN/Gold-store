import HomePhoneNumber from "@/Components/AddPhoneNumber";
import Layout from "@/Containers/Layout";
import HomeMain from "./Home";
import { Container, Grid } from "@mui/material";
import TabPriceList from "@/Components/TabPrice";

export default function Home() {
  return (
    <>
      <Layout>
        <Container maxWidth="xl">
          <Grid display="flex" justifyContent="space-around">
            <HomePhoneNumber />

            <TabPriceList />
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
