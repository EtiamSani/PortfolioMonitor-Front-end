import React from "react";
import { Button } from "../ui/button";

const SidebarButtons = ({ textBesideSideBarButton, IconComponent }: any) => {
  return (
    <li>
      <div className="w-full ">
        <Button
          variant="noStyle"
          className="flex items-center py-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
        >
          <div className="w-full">
            {IconComponent && (
              <div className="flex items-center">
                {IconComponent}
                <span className="ms-3 text-md">{textBesideSideBarButton}</span>
              </div>
            )}
          </div>
        </Button>
      </div>
    </li>
  );
};

export default SidebarButtons;
