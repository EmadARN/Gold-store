import BuyGoldList from "@/Components/BuyGold";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";

import React from "react";

const BuyGoldPage = () => {
  return (
    <UserDashboard indexBtn={4}>
      <BuyGoldList />
    </UserDashboard>
  );
};

export default BuyGoldPage;
