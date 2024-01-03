"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BsBuildingAdd } from "react-icons/bs";
import { TbCategoryPlus } from "react-icons/tb";
import CompanyModal from "./AddCompanyModal";
import { Button } from "@/components/ui/button";

const AddCompanyButton = ({ portfolioId, handleSubmit }: any) => {
  return (
    <div className="ml-7 ">
      <div className="flex ">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4">
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

export default AddCompanyButton;
