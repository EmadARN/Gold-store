import WithdrawGoldList from "@/Components/WithdrawGold";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";
import { parseCookies } from "nookies";
import { IPServer } from "@/Config";
import axios from "axios";
const WithdrawGoldPage = ({ walletDataToken, walletDataTokenError }) => {

  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={7}>
      <WithdrawGoldList walletDataToken={walletDataToken} />
    </UserDashboard>
  );
};

export default WithdrawGoldPage;
export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let walletDataToken;
  let walletDataTokenError;

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

  return {
    props: {
      walletDataToken,
      walletDataTokenError,
    },
  };
}
