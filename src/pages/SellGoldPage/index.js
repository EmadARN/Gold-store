import SellGoldList from "@/Components/SellGold";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";

import React from "react";

const SellGoldPage = () => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={5}>
      <SellGoldList />
    </UserDashboard>
  );
};

export default SellGoldPage;
