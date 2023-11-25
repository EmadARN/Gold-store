import WithdrawList from "@/Components/Withdraw";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";

const WithdrawPage = () => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={3}>
      <WithdrawList />
    </UserDashboard>
  );
};

export default WithdrawPage;
