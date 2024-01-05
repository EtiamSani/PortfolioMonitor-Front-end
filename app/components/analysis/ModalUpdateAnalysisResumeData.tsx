import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent, useState } from "react";

const ModalUpdateAnalysisResumeData = ({ analysisId }: any) => {
  const [analysisData, setAnalysisData] = useState<any>({
    fairValue: "",
    peaOrCto: "",
    stockCategory: "",
    entryPoint: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: keyof AnalysisData
  ) => {
    const { value } = event.target;
    setAnalysisData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
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
          <Label htmlFor="email" className="text-right">
            {" "}
            La fair value
          </Label>
          <Input
            type="text"
            id="fairValue"
            placeholder="300"
            value={analysisData.fairValue}
            onChange={(e) => handleInputChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Support
          </Label>
          <Input
            type="text"
            id="peaOrCto"
            placeholder="PEA"
            value={analysisData.peaOrCto}
            onChange={(e) => handleInputChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Catégorie
          </Label>
          <Input
            type="text"
            id="stockCategory"
            placeholder="Fast grower"
            value={analysisData.stockCategory}
            onChange={(e) => handleInputChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Prix d'entrée
          </Label>
          <Input
            type="text"
            id="entryPoint"
            placeholder="283"
            value={analysisData.entryPoint}
            onChange={(e) => handleInputChange}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button>Ajouter</Button>
      </DialogFooter>
    </div>
  );
};

export default ModalUpdateAnalysisResumeData;
