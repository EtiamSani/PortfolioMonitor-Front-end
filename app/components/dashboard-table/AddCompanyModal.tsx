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
import { addCompany } from "@/app/actions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import options from "@/utils/stockCategoryLabels";
import gicsOptions from "@/utils/gicsLabels";
import typeOptions from "@/utils/typeLabels";
import capitalisationOptions from "@/utils/capitalisationLabel";
import { HiOutlineXMark } from "react-icons/hi2";

const AddCompanyModal = ({ portfolioId }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    ticker: "",
    currency: "",
    type: "",
    capitalisation: "",
    numberOfStocks: 0,
    pru: 0,
    stockCategory: "",
    currentStockPrice: 0,
    pruValue: 0,
    marketValue: 0,
    gainOrLoss: 0,
    pvMvPercentage: 0,
    country: "",
    gics: "",
    annualDividends: 0,
    dividendsReceived: 0,
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCategoryChange = (selectedOption: any) => {
    setFormData((prevData) => ({
      ...prevData,
      stockCategory: selectedOption,
    }));
  };

  const handleGicsChange = (selectedOption: any) => {
    setFormData((prevData) => ({
      ...prevData,
      gics: selectedOption,
    }));
  };

  const handleTypeChange = (selectedOption: any) => {
    setFormData((prevData) => ({
      ...prevData,
      type: selectedOption,
    }));
  };

  const handleCapiChange = (selectedOption: any) => {
    setFormData((prevData) => ({
      ...prevData,
      capitalisation: selectedOption,
    }));
  };

  const handleAddCompany = async () => {
    try {
      await addCompany(portfolioId, formData);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);
      setFormData({
        name: "",
        logo: "",
        ticker: "",
        currency: "",
        type: "",
        capitalisation: "",
        numberOfStocks: 0,
        pru: 0,
        stockCategory: "",
        currentStockPrice: 0,
        pruValue: 0,
        marketValue: 0,
        gainOrLoss: 0,
        pvMvPercentage: 0,
        country: "",
        gics: "",
        annualDividends: 0,
        dividendsReceived: 0,
      });
    } catch (error) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 4000);
      console.error("Error adding company:", error);
    }
  };

  return (
    <div>
      <DialogHeader>
        <DialogTitle>Une nouvelle entreprise</DialogTitle>
        <DialogDescription>
          Ajouter une nouvelle ligne a votre portefeuille.
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
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selectionnez une catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Catégories</SelectLabel>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Capitalisation
          </Label>
          <Select onValueChange={handleCapiChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selectionnez une capitalisation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Capitalisations</SelectLabel>
                {capitalisationOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            GICS
          </Label>
          <Select onValueChange={handleGicsChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selectionnez un secteur" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Secteur (GICS)</SelectLabel>
                {gicsOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
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
          <Select onValueChange={handleTypeChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selectionnez le type d'actif" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                {typeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="annualDividends" className="text-right">
            Dividendes annuels
          </Label>
          <Input
            id="annualDividends"
            value={formData.annualDividends}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={handleAddCompany}>Ajouter à mon portefeuille</Button>
      </DialogFooter>
      {successMessage && (
        <Alert className="mt-3 border-green-800">
          <AlertTitle className="text-green-700 flex items-center">
            <div>L'entreprise a bien été ajouté a votre portefeuille </div>
            <FaThumbsUp className="ml-3 text-xl" />
          </AlertTitle>
        </Alert>
      )}
      {errorMessage && (
        <Alert className="mt-3 border-red-800">
          <AlertTitle className="text-red-700">
            <div className="flex items-center">
              <div>Échec de l'ajout de l'entreprise.</div>

              <HiOutlineXMark className=" ml-2 text-xl" />
            </div>
          </AlertTitle>
        </Alert>
      )}
    </div>
  );
};

export default AddCompanyModal;
