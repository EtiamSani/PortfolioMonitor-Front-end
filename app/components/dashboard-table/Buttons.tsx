"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BsBuildingAdd } from "react-icons/bs";
import { TbCategoryPlus } from "react-icons/tb";
import CompanyModal from "./CompanyModal";
import { Button } from "@/components/ui/button";

const Buttons = ({ portfolioId, handleSubmit }: any) => {
  return (
    <div className="ml-7 ">
      <div className="flex ">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#003F91] p-5 hover:bg-[#1B98E0] mt-4">
              <BsBuildingAdd className="text-3xl cursor-pointer" />
              <div className="ml-3">Ajouter une entreprise</div>
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <CompanyModal
              portfolioId={portfolioId}
              handleSubmit={handleSubmit}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Buttons;
