import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";
import { parseCookies } from "nookies";
import { IPServer } from "@/Config";
import Desk from "@/Components/Desk/Desk";
import axios from "axios";

const MainDeskPage = ({
  walletDataToken,
  goldStockPrice,
  walletDataTokenError,
  goldStockPriceError,
}) => {
  console.log(goldStockPrice);

  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={1}>
      <Desk goldStockPrice={goldStockPrice} walletDataToken={walletDataToken} />
    </UserDashboard>
  );
};

export default MainDeskPage;
export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["auth-token"];

  let walletDataToken;
  let goldStockPrice;
  let walletDataTokenError;
  let goldStockPriceError;

  if (token) {
    try {
      const { data: walletDataToken2 } = await axios.get(
        `${IPServer}/UserDashboard-DeskPage/wallet-data/`,
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
