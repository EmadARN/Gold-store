import FaqsList from "@/Components/Faqs";
import Layout from "@/Containers/Layout";
import React from "react";
import axios from "axios";
import { parseCookies } from "nookies";
import { IPServer } from "@/Config";
const Faqs = ({validationTokenError}) => {
  return (
    <Layout dashboard={validationTokenError}>
      <FaqsList />
    </Layout>
  );
};

export default Faqs;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let validationToken;
  let TabPriceTable;
  let validationTokenError;
  let TabPriceTableError;

  if (token) {
    try {
      const { data: ValdationToken2 } = await axios.get(
        `${IPServer}/Home/validate-token/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      validationToken = ValdationToken2;
      validationTokenError = "200";
    } catch (error) {
      validationToken = "";
      validationTokenError = "400";
    }
  } else {
    console.log(token);

    validationToken = `${token}`;
    validationTokenError = "400";
  }
  try {
    const { data: TabPriceTable2 } = await axios.get(
      `${IPServer}/Home/gold-stock-price/`
    );

    TabPriceTable = TabPriceTable2;
    TabPriceTableError = "200";
  } catch (error) {
    TabPriceTable = "";
    TabPriceTableError = "400";
  }
  return {
    props: {
      validationToken,
      TabPriceTable,
      validationTokenError,
      TabPriceTableError,
    },
  };
}