import DepositList from "@/Components/Deposit";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";

import React from "react";

const DepositPage = () => {
  return (
    <UserDashboard indexBtn={2}>
      <DepositList />
    </UserDashboard>
  );
};

export default DepositPage;
