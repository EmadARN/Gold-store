import SellGoldList from "@/Components/SellGold";
import { IPServer } from "@/Config";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import axios from "axios";
import { parseCookies } from "nookies";
import React from "react";

const SellGoldPage = ({ walletDataToken, goldStockPrice }) => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={5}>
      <SellGoldList
        walletDataToken={walletDataToken}
        goldStockPrice={goldStockPrice}
      />
    </UserDashboard>
  );
};

export default SellGoldPage;
export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];
  let walletDataToken;
  let walletDataTokenError;
  let goldStockPrice;
  let goldStockPriceError;
  
  if (token) {
    try {
      const { data: walletDataToken2 } = await axios.get(
        `${IPServer}/UserDashboard-GoldBuySale/wallet-data/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      walletDataToken = walletDataToken2;
      walletDataTokenError = "200";
    } catch (error) {
      walletDataToken = "";
      walletDataTokenError = "400";
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/SignUp",
      },
    };
  }
  try {
    const { data: goldStockPrice2 } = await axios.get(
      `${IPServer}/UserDashboard-DeskPage/gold-stock-price/`
    );

    goldStockPrice = goldStockPrice2;
    goldStockPriceError = "200";
  } catch (error) {
    goldStockPrice = "";
    goldStockPriceError = "400";
  }
  return {
    props: {
      walletDataToken,
      goldStockPrice,
      walletDataTokenError,
      goldStockPriceError,
    },
  };
}
