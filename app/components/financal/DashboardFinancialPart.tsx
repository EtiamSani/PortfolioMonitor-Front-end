"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchPortfolioById, updatePortfolioData } from "@/app/actions";
import { useEffect, useState } from "react";

const DashboardFinancialPart = ({ portfolioId, financeData }: any) => {
  // const [portfolioData, setPortfolioData] = useState<any>({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchPortfolioById(portfolioId);

  //       setPortfolioData(data);
  //     } catch (error) {
  //       console.error("Error fetching portfolio data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [portfolioId]);
  const [formData, setFormData] = useState({
    moneyInput: "",
  });

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
    <div className="flex gap-5 ">
      <Card className="w-[260px] ml-[70px] mt-[50px] border-none bg-[#1B98E0]">
        {" "}
        <CardHeader>
          <CardTitle className="text-[#FAFAFA]">Liquidités</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-[#FAFAFA]">
            {financeData.liquidity} €
          </h2>
        </CardContent>
      </Card>

      <Card className="w-[260px]  mt-[50px]  bg-[#FAFAFA]">
        <CardHeader>
          <CardTitle className="text-[#1B98E0]">Total apports</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-[#1B98E0]">
            {financeData.moneyInput} €
          </h2>
        </CardContent>
        <div className="flex w-[200px] max-w-sm items-center space-x-2 mb-2 m-auto">
          <Input
            id="moneyInput"
            type="text"
            placeholder="Nouvel apport"
            className="bg-white"
            value={formData.moneyInput}
            onChange={handleChange}
          />
          <Button onClick={() => updatePortfolioData(portfolioId, formData)}>
            Ajouter
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DashboardFinancialPart;
