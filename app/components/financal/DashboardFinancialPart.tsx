"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchPortfolioById, updatePortfolioData } from "@/app/actions";
import { useEffect, useState } from "react";

const DashboardFinancialPart = ({ portfolioId }: any) => {
  // const portfolioData = await fetchPortfolioById(
  //   "02d36371-a310-43fc-9ca8-b83d8f54f113"
  // );

  const [portfolioData, setPortfolioData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPortfolioById(portfolioId);
        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchData();
  }, [portfolioId]);

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
    <div className="flex gap-5 absolute top-0">
      <Card className="w-[260px] ml-[70px] mt-[50px] border-none bg-[#1B98E0]">
        {" "}
        <CardHeader>
          <CardTitle className="text-[#FAFAFA]">Liquidités</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-[#FAFAFA]">
            {portfolioData.liquidity} €
          </h2>
        </CardContent>
      </Card>

      <Card className="w-[260px]  mt-[50px]  bg-[#FAFAFA]">
        <CardHeader>
          <CardTitle className="text-[#1B98E0]">Total apports</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-[#1B98E0]">
            {portfolioData.moneyInput} €
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

      <Card className="w-[260px]  mt-[50px] bg-[#003F91]">
        <CardHeader>
          <CardTitle className="text-white">Valeur du portefeuille</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mr-3 mb-5">
            <h2 className="text-4xl font-bold text-[#E5F4E3]">
              {" "}
              {portfolioData.portfolioValue} €
            </h2>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[260px]  mt-[50px] bg-[#003F91]">
        <CardHeader>
          <CardTitle className="text-white">PV/MV</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mr-3 mb-5">
            <h2 className="text-4xl font-bold text-[#E5F4E3]">
              {portfolioData.gainOrLost} %
            </h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardFinancialPart;
