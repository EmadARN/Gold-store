import AddingPrice from "@/Components/AddingPriceAdmin";
import { IPServer } from "@/Config";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObjAdmin } from "@/Utils/DrawerObjectAdmin";
import axios from "axios";
import { parseCookies } from "nookies";
import React from "react";

const AddingPriceAdmin = ({ settingData }) => {
  console.log(settingData);
  return (
    <UserDashboard indexBtn={7} DrawerObj={DrawerObjAdmin}>
      <AddingPrice settingData={settingData.data} />
    </UserDashboard>
  );
};

export default AddingPriceAdmin;
export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  let settingData;
  let settingDataError;
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
      settingData = error.response.data;
      settingDataError = "400";
      if (
        error.response.data.detail ==
        "You do not have permission to perform this action."
      ) {
        return {
          redirect: {
            permanent: false,
            destination: "/",
          },
        };
      }
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
