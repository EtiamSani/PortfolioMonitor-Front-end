import Sidebar from "@/components/navbar/Sidebar";
import AnalysisSection from "../components/analysis/AnalysisSection";

const page = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen flex">
      <div>
        <Sidebar />
      </div>
      <div className="mx-auto">
        <AnalysisSection />
      </div>
    </div>
  );
};

export default page;
