"use client";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { FaThumbsUp } from "react-icons/fa6";
import { updateDividendsReceived } from "@/app/actions";

const AddDividendsModal = ({ companyId }: any) => {
  const [formData, setFormData] = useState({
    dividendsReceived: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Ajouter dividendes</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="dividendsReceived" className="text-right">
            Dividendes reçu
          </Label>
          <Input
            id="dividendsReceived"
            value={formData.dividendsReceived}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={() => updateDividendsReceived(companyId, formData)}>
          Ajouter à mon portefeuille
        </Button>
      </DialogFooter>
      {successMessage && (
        <Alert className="mt-3 border-green-800">
          <AlertTitle className="text-green-700 flex items-center">
            <div>L'entreprise a bien été ajouté a votre portefeuille </div>
            <FaThumbsUp className="ml-3 text-xl" />
          </AlertTitle>
        </Alert>
      )}
    </div>
  );
};

export default AddDividendsModal;
