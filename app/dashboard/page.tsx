import Sidebar from "@/components/navbar/Sidebar";
import React from "react";
import Buttons from "../components/dashboard-table/Buttons";
import DashboardTableTabs from "../components/dashboard-table/DashboardTableTabs";

const page = () => {
  return (
    <div className="bg-[#dfe4ed] min-h-screen">
      <Sidebar />
      <div className="flex flex-col">
        {/* <Buttons /> */}
        <DashboardTableTabs />
      </div>
    </div>
  );
};

export default page;
