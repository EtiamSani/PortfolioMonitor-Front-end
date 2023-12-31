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
import React, { useState } from "react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { FaThumbsUp } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import { addNewShareToCompany } from "@/app/actions";

const BuyNewSharesModal = ({ companyId }: any) => {
  console.log("idddddd", companyId);
  const [formData, setFormData] = useState({
    nature: "",
    objective: "",
    message: "",
    numberOfStocks: "",
    newPru: "",
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
        <DialogTitle>Ajouter un nouvel achat</DialogTitle>
        {/* <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription> */}
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nom entreprise
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
            Nombre d'action acheter
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
            prix de l'action
          </Label>
          <Input
            id="priceOfShare"
            value={formData.priceOfShare}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="newPru" className="text-right">
            Nouveau PRU
          </Label>
          <Input
            id="newPru"
            value={formData.newPru}
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
        <Button onClick={() => addNewShareToCompany(companyId, formData)}>
          Ajouter l'achat
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

export default BuyNewSharesModal;
