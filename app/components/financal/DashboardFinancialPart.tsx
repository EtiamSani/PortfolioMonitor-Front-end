"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updatePortfolioData } from "@/app/actions";
import { useState } from "react";

const DashboardFinancialPart = ({ portfolioId, financeData }: any) => {
  const [formData, setFormData] = useState({
    moneyInput: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let updatedValue = value;

    updatedValue = updatedValue.replace(",", ".");

    setFormData((prevData) => ({
      ...prevData,
      [id]: updatedValue,
    }));
  };

  return (
    <div className="flex gap-5 ">
      <Card className="w-[260px]  mt-[50px] bg-[#495582] h-[203px]">
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

      <Card className="w-[260px]  mt-[50px] bg-[#495582] h-[203px]">
        <CardHeader>
          <CardTitle className="text-white">Total apports</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-white">
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
