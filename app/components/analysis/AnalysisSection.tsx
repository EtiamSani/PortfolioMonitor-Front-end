"use client";
import {
  fetchAllAnalysis,
  getTotalAnalysisCount,
  postAnalysis,
} from "@/app/actions";
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
import AnalysisPagination from "./AnalysisPagination";

const AnalysisSection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analyses, setAnalyses] = useState<any[]>([]);

  const [totalPages, setTotalPages] = useState<number>(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [analysisPerPage, setAnalysisPerPage] = useState(3);

  const [isClient, setIsClient] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("pdfFile", selectedFile);
      await postAnalysis(formData);
    }
  };
  const loadAnalyses = async (page: number) => {
    const analysisData = await fetchAllAnalysis(page, analysisPerPage);
    setAnalyses(analysisData);
  };

  useEffect(() => {
    const fetchTotalPages = async () => {
      const totalAnalysis = await getTotalAnalysisCount();
      const totalAnalysisCount = totalAnalysis.length;
      const totalPages = Math.ceil(totalAnalysisCount / analysisPerPage);
      console.log(totalPages);
      setTotalPages(totalPages);
      setIsClient(true);
    };

    fetchTotalPages();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    loadAnalyses(page);
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
          <div className="flex">
            <p className="font-bold mr-1">Catégorie : </p>
            <span>{analysis.stockCategory}</span>
          </div>

          <div className="flex">
            <p className="font-bold mr-1">Support : </p>
            <span>{analysis.peaOrCto}</span>
          </div>

          <div className="flex">
            <p className="font-bold mr-1">Fair value : </p>
            <span>{analysis.fairValue}</span>
          </div>

          <div className="flex">
            <p className="font-bold mr-1">Prix d'entrée : </p>
            <span>{analysis.entryPoint}</span>
          </div>
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
    loadAnalyses(currentPage);
  }, [currentPage]);

  return (
    <div className="mt-20 flex flex-col items-center ml-[280px]">
      <h2 className="text-5xl font-bold mb-5">Déposer une analyse</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Document PDF</Label>
        <Input id="picture" type="file" onChange={handleFileChange} />

        <Button onClick={handleSubmit} className="bg-[#495582] mt-5">
          Envoyer
        </Button>
      </div>
      <h2 className="text-5xl font-bold my-5">Analyses EIP</h2>
      <div className="grid grid-cols-3 gap-4 my-5 ">
        {renderAnalysisCards()}
      </div>
      {isClient ? (
        <AnalysisPagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
        />
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

export default AnalysisSection;
