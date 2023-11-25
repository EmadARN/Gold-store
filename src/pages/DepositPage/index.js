import DepositList from "@/Components/Deposit";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";

const DepositPage = () => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={2}>
      <DepositList />
    </UserDashboard>
  );
};

export default DepositPage;
