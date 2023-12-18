import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import UpadateCompanyModal from "./UpdateCompanyModal";
import { BsBuildingFillX } from "react-icons/bs";

const UpdateCompanyButton = ({ companyId }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#003F91] p-5 hover:bg-[#1B98E0] ">
          <BsBuildingFillX className="text-xl mr-3" />
          <div className="ml-3">Modifier</div>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <UpadateCompanyModal companyId={companyId} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCompanyButton;
