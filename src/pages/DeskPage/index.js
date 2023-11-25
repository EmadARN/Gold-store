import DeskList from "@/Components/Desk";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";
import { DrawerObj } from "@/Utils/DrawerObjects";
import React from "react";

const MainDeskPage = () => {
  return (
    <UserDashboard DrawerObj={DrawerObj} indexBtn={1}>
      <DeskList />
    </UserDashboard>
  );
};

export default MainDeskPage;
