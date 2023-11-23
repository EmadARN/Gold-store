import WithdrawList from "@/Components/Withdraw";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";

import React from "react";

const WithdrawPage = () => {
  return (
    <UserDashboard indexBtn={3}>
      <WithdrawList />
    </UserDashboard>
  );
};

export default WithdrawPage;
