import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BsBuildingAdd } from "react-icons/bs";
import { TbCategoryPlus } from "react-icons/tb";
import CompanyModal from "./CompanyModal";

const Buttons = () => {
  return (
    <div className="ml-[350px] mt-[100px]">
      <div className="flex ">
        <Dialog>
          <DialogTrigger asChild>
            <BsBuildingAdd className="text-3xl cursor-pointer" />
          </DialogTrigger>

          <DialogTrigger asChild>
            <TbCategoryPlus className="text-3xl cursor-pointer ml-5" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <CompanyModal />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Buttons;
