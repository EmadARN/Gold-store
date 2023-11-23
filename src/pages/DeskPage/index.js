import DeskList from "@/Components/Desk";
import UserDashboard from "@/Containers/DashboardUser/UserDashboard";

import React from "react";

const MainDeskPage = () => {
  return (
    <UserDashboard indexBtn={1}>
      <DeskList />
    </UserDashboard>
  );
};

export default MainDeskPage;
