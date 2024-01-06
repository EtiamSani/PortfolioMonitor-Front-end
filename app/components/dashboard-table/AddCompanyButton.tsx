"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BsBuildingAdd } from "react-icons/bs";
import { TbCategoryPlus } from "react-icons/tb";
import CompanyModal from "./AddCompanyModal";
import { Button } from "@/components/ui/button";

const AddCompanyButton = ({ portfolioId, handleSubmit }: any) => {
  return (
    <div className="ml-[400px] ">
      <div className="flex ">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-4">
              <BsBuildingAdd className="text-2xl cursor-pointer" />
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
