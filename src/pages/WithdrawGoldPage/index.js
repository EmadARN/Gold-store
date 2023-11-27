import WithdrawGoldList from "@/Components/WithdrawGold";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";

const WithdrawGoldPage = () => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={7}>
      <WithdrawGoldList />
    </UserDashboard>
  );
};

export default WithdrawGoldPage;
