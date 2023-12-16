import WithdrawList from "@/Components/Withdraw";
import { IPServer } from "@/Config";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import axios from "axios";
import { parseCookies } from "nookies";
import React from "react";

const WithdrawPage = ({ WalletData, wallettTokenError }) => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={3}>
      <WithdrawList WalletData={WalletData} />
    </UserDashboard>
  );
};

export default WithdrawPage;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];
  let WalletData;
  let wallettTokenError;

  try {
    const { data: Getdata } = await axios.get(
      `${IPServer}/UserDashboard-GetRequest/wallet-data/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    WalletData = Getdata;
    wallettTokenError = "200";
  } catch (error) {
    WalletData = "";
    wallettTokenError = "400";
  }

  return {
    props: {
      WalletData,
      wallettTokenError,
    },
  };
}
