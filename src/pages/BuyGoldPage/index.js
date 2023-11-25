import BuyGoldList from "@/Components/BuyGold";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";

const BuyGoldPage = () => {
  return (
    <UserDashboard indexBtn={4} DrawerObj={DrawerObj}>
      <BuyGoldList />
    </UserDashboard>
  );
};

export default BuyGoldPage;
