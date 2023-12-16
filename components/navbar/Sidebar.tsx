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
    router.push("/signup-portfolio-owner");
  };

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <h1 className="p-2 text-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-bold">
          EIP Portfolio{" "}
        </h1>
        <Separator className="bg-gray-200" />
        <div className="m-6 ">Bonjour jean</div>
        <Separator className="mb-5 bg-gray-200" />
        menu
        <ul className="space-y-2 font-medium">
          <li>
            <div className="w-full">
              <Button
                variant="noStyle"
                className="flex items-center py-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleHome}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <GoHomeFill className="text-2xl text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="ms-3 text-md">Mes portefeuilles</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
          <li>
            <div className="w-full">
              <Button
                variant="noStyle"
                className="flex items-center py-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleHome}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <MdOutlineDashboard className="text-2xl text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="ms-3 text-md">Dashboard</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
          <li>
            <div className="w-full">
              <Button
                variant="noStyle"
                className="flex items-center py-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleHome}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <HiMiniUsers className="text-2xl text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="ms-3 text-md">Abonnées</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
          <li>
            <div className="w-full">
              <Button
                variant="noStyle"
                className="flex items-center py-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleHome}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <FaRegFile className="text-2xl text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="ms-3 text-md">Analyses</span>
                  </div>
                </div>
              </Button>
            </div>
          </li>
          <li>
            <div className="w-full">
              <Button
                variant="noStyle"
                className="flex items-center py-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={handleLogout}
              >
                <div className="w-full">
                  <div className="flex items-center">
                    <FiLogOut className="text-2xl text-red-500  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="ms-3 text-md">Déconnection</span>
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
