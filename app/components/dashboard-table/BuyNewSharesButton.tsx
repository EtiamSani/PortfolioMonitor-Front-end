import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import { GiPayMoney } from "react-icons/gi";
import BuyNewSharesModal from "./BuyNewSharesModal";

const BuyNewSharesButton = ({ companyId }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#003F91] p-5 hover:bg-[#1B98E0] ">
          <GiPayMoney className="text-xl mr-3" />
          <div className="ml-3">Achat</div>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <BuyNewSharesModal companyId={companyId} />
      </DialogContent>
    </Dialog>
  );
};

export default BuyNewSharesButton;
