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
import { Alert, AlertTitle } from "@/components/ui/alert";
import { FaThumbsUp } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import { removeShareFromCompany } from "@/app/actions";
import { useState } from "react";

const SellSharesModal = ({ companyId }: any) => {
  const [formData, setFormData] = useState({
    nature: "",
    objective: "",
    message: "",
    numberOfStocks: "",
    priceOfShare: "",
    companyId: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let updatedValue = value;

    // Convertir les virgules en points ou vice versa
    updatedValue = updatedValue.replace(",", ".");

    // Gérer la saisie de l'utilisateur ici
    // Assurez-vous de valider la saisie selon vos besoins

    setFormData((prevData) => ({
      ...prevData,
      [id]: updatedValue,
    }));
  };

  return (
    <div>
      <DialogHeader>
        <DialogTitle>Ajouter une nouvelle vente</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Vente de
          </Label>
          <Input
            id="nature"
            value={formData.nature}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="objective" className="text-right">
            Motivation
          </Label>
          <Input
            id="objective"
            value={formData.objective}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="numberOfStocks" className="text-right">
            Nombre d'action vendue
          </Label>
          <Input
            id="numberOfStocks"
            value={formData.numberOfStocks}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="priceOfShare" className="text-right">
            prix de de vente/action
          </Label>
          <Input
            id="priceOfShare"
            value={formData.priceOfShare}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="message" className="text-right">
            Message
          </Label>
          <Textarea
            id="message"
            onChange={(e) => handleChange(e)}
            value={formData.message}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={() => removeShareFromCompany(companyId, formData)}>
          Ajouter la vente
        </Button>
      </DialogFooter>
      {successMessage && (
        <Alert className="mt-3 border-green-800">
          <AlertTitle className="text-green-700 flex items-center">
            <div>Ajouter l'achat</div>
            <FaThumbsUp className="ml-3 text-xl" />
          </AlertTitle>
        </Alert>
      )}
    </div>
  );
};

export default SellSharesModal;
