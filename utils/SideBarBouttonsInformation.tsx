import { HiMiniUsers } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { FaRegFile } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";

export const sidebarData = [
  {
    textBesideSideBarButton: "Mes portefeuilles",
    IconComponent: (
      <GoHomeFill className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    textBesideSideBarButton: "Dashboard",
    IconComponent: (
      <MdOutlineDashboard className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    textBesideSideBarButton: "Abonnées",
    IconComponent: (
      <HiMiniUsers className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    textBesideSideBarButton: "Analyses",
    IconComponent: (
      <FaRegFile className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    textBesideSideBarButton: "Déconnexion",
    IconComponent: (
      <FiLogOut className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
];

export default sidebarData;
