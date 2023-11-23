import { TransactionList } from "@/Components/Transaction";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";

import React from "react";

const TransactionPage = () => {
  return (
    <UserDashboard indexBtn={6}>
      <TransactionList />
    </UserDashboard>
  );
};

export default TransactionPage;
