import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import { GiPayMoney } from "react-icons/gi";
import BuyNewSharesModal from "./BuyNewSharesModal";

const BuyNewSharesButton = ({ companyId }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <GiPayMoney className="text-xl" />
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
