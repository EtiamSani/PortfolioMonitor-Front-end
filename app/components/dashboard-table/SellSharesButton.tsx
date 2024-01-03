import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import SellSharesModal from "./SellSharesModal";
import { GiReceiveMoney } from "react-icons/gi";

const SellSharesButton = ({ companyId }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <GiReceiveMoney className="text-xl" />
          <div className="ml-3">Vente</div>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <SellSharesModal companyId={companyId} />
      </DialogContent>
    </Dialog>
  );
};

export default SellSharesButton;
