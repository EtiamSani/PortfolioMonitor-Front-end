import { HiMiniUsers } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { FaRegFile } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import SidebarButtons from "./SidebarButtons";
import sidebarData from "@/utils/SideBarBouttonsInformation";
const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <h1 className="p-2 text-4xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-bold mb-10">
          EIP Portfolio{" "}
        </h1>
        <ul className="space-y-2 font-medium">
          {sidebarData.map((buttonData, index) => (
            <SidebarButtons
              key={index}
              textBesideSideBarButton={buttonData.textBesideSideBarButton}
              IconComponent={buttonData.IconComponent}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
