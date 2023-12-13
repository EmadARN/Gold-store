import { TransactionList } from "@/Components/Transaction";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";
import { parseCookies } from "nookies";
import { IPServer } from "@/Config";
import axios from "axios";
const TransactionPage = ({
  withdrawToken,
  depositToken,
  buyGold,
  sellGold,
  withdrawGold,
  withdrawTokenError,
  depositTokenError,
  buyGoldError,
  sellGoldError,
  withdrawGoldError,
}) => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={6}>
      <TransactionList
        depositToken={depositToken.data}
        withdrawToken={withdrawToken.data}
        buyGold={buyGold.data}
        sellGold={sellGold.data}
        withdrawGold={withdrawGold.data}
      />
    </UserDashboard>
  );
};

export default TransactionPage;
export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let depositToken;
  let withdrawToken;
  let buyGold;
  let sellGold;
  let withdrawGold;
  let buyGoldError;
  let sellGoldError;
  let withdrawGoldError;
  let depositTokenError;
  let withdrawTokenError;

  if (token) {
    try {
      const { data: depositToken2 } = await axios.get(
        `${IPServer}/UserDashboard-UserReporting/transaction-report/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      depositToken = depositToken2;
      depositTokenError = "200";
    } catch (error) {
      depositToken = [];
      depositTokenError = "400";
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
    const { data: withdrawToken2 } = await axios.get(
      `${IPServer}/UserDashboard-UserReporting/get-money-request-report/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    withdrawToken = withdrawToken2;
    withdrawTokenError = "200";
  } catch (error) {
    withdrawToken = [];
    withdrawTokenError = "400";
  }
  try {
    const { data: buyGold2 } = await axios.get(
      `${IPServer}/UserDashboard-UserReporting/buy-gold-report/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    buyGold = buyGold2;
    buyGoldError = "200";
  } catch (error) {
    buyGold = [];
    buyGoldError = "400";
  }
  try {
    const { data: sellGold2 } = await axios.get(
      `${IPServer}/UserDashboard-UserReporting/sale-gold-report/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    sellGold = sellGold2;
    sellGoldError = "200";
  } catch (error) {
    sellGold = [];
    sellGoldError = "400";
  }

  try {
    const { data: withdrawGold2 } = await axios.get(
      `${IPServer}/UserDashboard-UserReporting/get-gold-request-report/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    withdrawGold = withdrawGold2;
    withdrawGoldError = "200";
  } catch (error) {
    withdrawGold = [];
    withdrawGoldError = "400";
  }
  return {
    props: {
      withdrawToken,
      depositToken,
      withdrawTokenError,
      depositTokenError,
      buyGold,
      sellGold,
      withdrawGold,
      buyGoldError,
      sellGoldError,
      withdrawGoldError,
    },
  };
}
