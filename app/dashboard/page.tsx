import Sidebar from "@/components/navbar/Sidebar";
import React from "react";

import DashboardTableTabs from "../components/dashboard-table/DashboardTableTabs";

import DashboardFinancialPart from "../components/financal/DashboardFinancialPart";

const page = () => {
  return (
    <div className="bg-[#dfe4ed] min-h-screen">
      <Sidebar />
      <div className="flex flex-col">
        {/* <DashboardFinancialPart /> */}
        <DashboardTableTabs />
      </div>
    </div>
  );
};

export default page;
