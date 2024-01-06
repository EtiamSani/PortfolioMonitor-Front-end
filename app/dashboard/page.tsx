import Sidebar from "@/components/navbar/Sidebar";
import React from "react";

import DashboardTableTabs from "../components/dashboard-table/DashboardTableTabs";


const page = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <DashboardTableTabs />
      </div>
    </div>
  );
};

export default page;
