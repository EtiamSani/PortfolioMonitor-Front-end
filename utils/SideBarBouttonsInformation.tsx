import { HiMiniUsers } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { FaRegFile } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const handleDeconnexion = () => {
  const router = useRouter();
  // Fonction pour "Déconnexion"
  console.log("Action pour Déconnexion");
  localStorage.clear();
  Cookies.remove("ownerId");
  router.push("/signup-owner-portfolio");
};

export const sidebarData = [
  {
    textBesideSideBarButton: "Mes portefeuilles",
    IconComponent: (
      <GoHomeFill className="text-2xl text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    textBesideSideBarButton: "Dashboard",
    IconComponent: (
      <MdOutlineDashboard className="text-2xl text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    textBesideSideBarButton: "Abonnés",
    IconComponent: (
      <HiMiniUsers className="text-2xl text-blacktransition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    textBesideSideBarButton: "Analyses",
    IconComponent: (
      <FaRegFile className="text-2xl text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
  {
    textBesideSideBarButton: "Déconnexion",
    IconComponent: (
      <FiLogOut className="text-2xl text-red-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    onClick: handleDeconnexion,
  },
];

export default sidebarData;
