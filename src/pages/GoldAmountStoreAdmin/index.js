import GoldAmountMain from "@/Components/GoldAmountInStoreAdmin";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
import React from "react";
import axios from "axios";
import { parseCookies } from "nookies";
import { IPServer } from "@/Config";
const GoldAmount = ({ settingData, settingDataError }) => {
  return (
    <UserDashboard DrawerObj={DrawerObjAdmin} indexBtn={6}>
      <GoldAmountMain settingData={settingData.data} />
    </UserDashboard>
  );
};

export default GoldAmount;
export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let settingData;
  let openClose;
  let settingDataError;
  let openCloseError;
  if (token) {
    try {
      const { data: settingData2 } = await axios.get(
        `${IPServer}/AdminDashboard-Setting/setting-data/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      settingData = settingData2;
      settingDataError = "200";
    } catch (error) {
      settingData = "";
      settingDataError = "400";
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
      settingData,
      settingDataError,
    },
  };
}
