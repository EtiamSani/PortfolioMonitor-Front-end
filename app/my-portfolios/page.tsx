import Sidebar from "@/components/navbar/Sidebar";
import React from "react";
import TableTabs from "../components/portfolio-table/TableTabs";
import FinancalPart from "@/app/components/financal/FinancalPart";
import dynamic from "next/dynamic";

const Greeting = dynamic(() => import("@/components/portfolio/Greeting"), {
  loading: () => <p>Chargement...</p>,
  ssr: false,
});

const page = () => {
  return (
    <div className="bg-[#dfe4ed] h-screen">
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="flex flex-col">
        <Greeting />
        <FinancalPart />
        <div className="flex">
          <Sidebar />
          <TableTabs />
        </div>
      </div>
    </div>
  );
};

export default page;
