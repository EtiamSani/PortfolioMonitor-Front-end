import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BsBuildingAdd } from "react-icons/bs";
import { TbCategoryPlus } from "react-icons/tb";
import CompanyModal from "./CompanyModal";
import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="ml-[600px] mt-[200px] ">
      <div className="flex ">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#003F91] p-5 hover:bg-[#1B98E0]">
              <BsBuildingAdd className="text-3xl cursor-pointer" />
            </Button>
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
