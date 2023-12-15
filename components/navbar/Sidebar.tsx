import SidebarButtons from "./SidebarButtons";
import sidebarData from "@/utils/SideBarBouttonsInformation";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-2xl"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <h1 className="p-2 text-4xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-bold mb-2">
          EIP Portfolio{" "}
        </h1>
        <Separator className="bg-gray-200" />
        <div className="m-6 ">Bonjour jean</div>
        <Separator className="mb-5 bg-gray-200" />
        menu
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
