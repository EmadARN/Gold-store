import WithdrawGoldList from "@/Components/WithdrawGold";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";

import React from "react";

const WithdrawGoldPage = () => {
  return (
    <UserDashboard indexBtn={7}>
      <WithdrawGoldList />
    </UserDashboard>
  );
};

export default WithdrawGoldPage;
