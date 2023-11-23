import SellGoldList from "@/Components/SellGold";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";

import React from "react";

const SellGoldPage = () => {
  return (
    <UserDashboard indexBtn={5}>
      <SellGoldList />
    </UserDashboard>
  );
};

export default SellGoldPage;
