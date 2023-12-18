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
import { revalidatePath } from "next/cache";
import { addCompany, handleSubmit } from "@/app/actions";

const AddCompanyModal = ({ portfolioId }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    ticker: "",
    currency: "",
    type: "",
    capitalisation: "",
    numberOfStocks: 0,
    pru: 0,
    stockCategory: "",
    country: "",
    gics: "",
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
        <DialogTitle>Ajouter une entreprise</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nom
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="ticker" className="text-right">
            Ticker
          </Label>
          <Input
            id="ticker"
            value={formData.ticker}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Pays
          </Label>
          <Input
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Devise
          </Label>
          <Input
            id="currency"
            value={formData.currency}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Categorie
          </Label>
          <Input
            id="stockCategory"
            value={formData.stockCategory}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Capitalisation
          </Label>
          <Input
            id="capitalisation"
            value={formData.capitalisation}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            gics
          </Label>
          <Input
            id="gics"
            value={formData.gics}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Nombre d'actions
          </Label>
          <Input
            id="numberOfStocks"
            value={formData.numberOfStocks}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            PRU
          </Label>
          <Input
            id="pru"
            value={formData.pru}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Type
          </Label>
          <Input
            id="type"
            value={formData.type}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={() => addCompany(portfolioId, formData)}>
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

export default AddCompanyModal;
