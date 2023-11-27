import { TransactionList } from "@/Components/Transaction";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";

const TransactionPage = () => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={6}>
      <TransactionList />
    </UserDashboard>
  );
};

export default TransactionPage;
