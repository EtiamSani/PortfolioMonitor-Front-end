"use client";
import { fetchAllAnalysis, postAnalysis } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useEffect, useState } from "react";

const AnalysisSection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analyses, setAnalyses] = useState<any[]>([]);
  //   const [analysisData, setAnalysisData] = useState<any>({
  //     fairValue: "",
  //     peaOrCto: "",
  //     stockCategory: "",
  //     entryPoint: "",
  //   });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  //   const handleInputChange = (
  //     event: ChangeEvent<HTMLInputElement>,
  //     field: keyof AnalysisData
  //   ) => {
  //     const { value } = event.target;
  //     setAnalysisData((prevData) => ({
  //       ...prevData,
  //       [field]: value,
  //     }));
  //   };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("pdfFile", selectedFile);
      await postAnalysis(formData);
    }
  };
  const loadAnalyses = async () => {
    const analysisData = await fetchAllAnalysis();
    setAnalyses(analysisData);
  };

  const renderAnalysisCards = () => {
    return analyses.map((analysis) => (
      <Card key={analysis.id} className="border border-gray-400 h-20 w-20">
        <p>{analysis.fileName}</p>
      </Card>
    ));
  };

  useEffect(() => {
    loadAnalyses();
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-5">Déposer une analyse</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Document PDF</Label>
        <Input id="picture" type="file" onChange={handleFileChange} />
        {/* <Label htmlFor="email">La fair value</Label>
        <Input
          type="text"
          id="fairValue"
          placeholder="300"
          value={analysisData.fairValue}
          onChange={(e) => handleInputChange(e, "fairValue")}
        />
        <Label htmlFor="email">Support</Label>
        <Input
          type="text"
          id="peaOrCto"
          placeholder="PEA"
          value={analysisData.peaOrCto}
          onChange={(e) => handleInputChange(e, "peaOrCto")}
        />
        <Label htmlFor="email">Catégorie</Label>
        <Input
          type="text"
          id="stockCategory"
          placeholder="Fast grower"
          value={analysisData.stockCategory}
          onChange={(e) => handleInputChange(e, "stockCategory")}
        />
        <Label htmlFor="email">Prix d'entrée</Label>
        <Input
          type="text"
          id="entryPoint"
          placeholder="283"
          value={analysisData.entryPoint}
          onChange={(e) => handleInputChange(e, "entryPoint")}
        /> */}
        <Button onClick={handleSubmit}>Envoyer</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">{renderAnalysisCards()}</div>
    </div>
  );
};

export default AnalysisSection;
