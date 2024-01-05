"use client";
import { fetchAllAnalysis, postAnalysis } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useEffect, useState } from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import ModalUpdateAnalysisResumeData from "./ModalUpdateAnalysisResumeData";

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

  const handleDownload = async (analysisId: any) => {
    try {
      const response = await fetch(
        `http://localhost:3001/owner-analysis/download/${analysisId}`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `analysis_${analysisId}.pdf`;

      document.body.appendChild(link);
      link.click();

      URL.revokeObjectURL(url);
      link.remove();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const renderAnalysisCards = () => {
    return analyses.map((analysis) => (
      <Card
        key={analysis.id}
        className="border border-slate-200 h-[350px] w-[350px]"
      >
        <CardHeader>
          <CardTitle>{analysis.fileName}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Catégorie :{analysis.stockCategory}</p>
          <p>Support : {analysis.peaOrCto}</p>
          <p>Fair value : {analysis.fairValue}</p>
          <p>Prix d'entrée : {analysis.entryPoint}</p>
        </CardContent>
        <CardFooter className="w-[340px]">
          <div className="w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mb-3 bg-[#495582]">Resumé</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <ModalUpdateAnalysisResumeData analysisId={analysis.id} />
              </DialogContent>
            </Dialog>
            <Button
              className="w-full bg-[#495582] "
              onClick={() => handleDownload(analysis.id)}
            >
              <HiOutlineDocumentDownload className="text-2xl" />
            </Button>
          </div>
        </CardFooter>
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
        <Button onClick={handleSubmit} className="bg-[#495582]">
          Envoyer
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">{renderAnalysisCards()}</div>
    </div>
  );
};

export default AnalysisSection;
