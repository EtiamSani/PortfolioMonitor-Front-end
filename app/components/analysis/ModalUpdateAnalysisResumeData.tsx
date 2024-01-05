"use client";
import { updateAnalysisData } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const ModalUpdateAnalysisResumeData = ({ analysisId }: any) => {
  const [analysisData, setAnalysisData] = useState({
    fairValue: "",
    peaOrCto: "",
    stockCategory: "",
    entryPoint: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const formattedValue = value.replace(",", ".");
    setAnalysisData({ ...analysisData, [id]: formattedValue });
  };

  const handleSubmit = () => {
    updateAnalysisData(analysisId, analysisData);

    setAnalysisData({
      fairValue: "",
      peaOrCto: "",
      stockCategory: "",
      entryPoint: "",
    });
  };
  return (
    <div>
      <DialogHeader>
        <DialogTitle>
          Ajouter ou modifier chiffres clés des analyses
        </DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="fairValue" className="text-right">
            {" "}
            La fair value
          </Label>
          <Input
            id="fairValue"
            placeholder="300"
            value={analysisData.fairValue}
            onChange={handleChange}
            className="col-span-3 "
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="peaOrCto" className="text-right">
            Support
          </Label>
          <Input
            id="peaOrCto"
            placeholder="PEA"
            value={analysisData.peaOrCto}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stockCategory" className="text-right">
            Catégorie
          </Label>
          <Input
            id="stockCategory"
            placeholder="Fast grower"
            value={analysisData.stockCategory}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="entryPoint" className="text-right">
            Prix d'entrée
          </Label>
          <Input
            id="entryPoint"
            placeholder="283"
            value={analysisData.entryPoint}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={handleSubmit}>Ajouter</Button>
      </DialogFooter>
    </div>
  );
};

export default ModalUpdateAnalysisResumeData;
