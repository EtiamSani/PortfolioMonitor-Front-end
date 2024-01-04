"use client";
import { HiMiniUsers } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { FaRegFile } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const handleHome = () => {
    console.log("home");
  };

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("ownerId");
    router.push("/signin-portfolio-owner");
  };

  const handleDashboard = () => {
    router.push("/dashboard");
  };

  const handlePortfolio: any = () => {
    router.push("/my-portfolios");
  };

  const handleAnalysis: any = () => {
    router.push("/analysis");
  };

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-sm"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#495582] dark:bg-gray-800 gap-y-5">
        <div className="flex flex-col  items-center mb-10">
          <h1 className="text-5xl text-white font-bold">EIP </h1>
          <h2 className="text-2xl text-white font-bold">Portfolio </h2>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <div className="w-full mb-8">
              <Button
                variant="noStyle"
                className="flex items-center text-white hover:text-[#272838] rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group w-full"
                onClick={handlePortfolio}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <GoHomeFill className="text-2xl text-white transition duration-75 dark:text-gray-400 group-hover:text-[#272838] dark:group-hover:text-white" />
                    <span className="ml-5 text-xl">Portefeuilles</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
          <li>
            <div className="w-full  mb-8">
              <Button
                variant="noStyle"
                className="flex items-center  text-white hover:text-[#272838] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleDashboard}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <MdOutlineDashboard className="text-2xl text-white transition duration-75 dark:text-gray-400 group-hover:text-[#272838] dark:group-hover:text-white" />
                    <span className="ml-5 text-xl">Dashboard</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
          <li>
            <div className="w-full mb-8">
              <Button
                variant="noStyle"
                className="flex items-center text-white hover:text-[#272838] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleHome}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <HiMiniUsers className="text-2xl text-white transition duration-75 dark:text-gray-400 group-hover:text-[#272838] dark:group-hover:text-white" />
                    <span className="ml-5 text-xl">Abonnées</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
          <li>
            <div className="w-full mb-8">
              <Button
                variant="noStyle"
                className="flex items-center  text-white hover:text-[#272838] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleAnalysis}
              >
                <div className="w-full ">
                  <div className="flex items-center">
                    <FaRegFile className="text-2xl text-white transition duration-75 dark:text-gray-400 group-hover:text-[#272838] dark:group-hover:text-white" />
                    <span className="ml-5 text-xl">Analyses</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
          <li>
            <div className="w-full mb-8">
              <Button
                variant="noStyle"
                className="flex items-center  text-white hover:text-[#003F91] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleLogout}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <FiLogOut className="text-2xl text-red-500  transition duration-75 dark:text-gray-400 group-hover:text-[#003F91] dark:group-hover:text-white" />
                    <span className="ml-5 text-xl">Déconnection</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
