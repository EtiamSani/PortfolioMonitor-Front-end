"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updatePortfolioData } from "@/app/actions";
import { useState } from "react";
import { GiMoneyStack, GiTwoCoins } from "react-icons/gi";

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
          <div className="flex items-center">
            <CardTitle className="text-[#C29E3C]">Liquidités</CardTitle>
            <GiTwoCoins className="text-[#C29E3C] text-2xl ml-2 " />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-[#FAFAFA] mt-5">
            {parseFloat(financeData.liquidity).toFixed(2)} €
          </h2>
        </CardContent>
      </Card>

      <Card className="w-[260px]  mt-[50px] bg-[#495582] h-[203px]">
        <CardHeader>
          <div className="flex items-center">
            <CardTitle className="text-[#C29E3C]">Total apports</CardTitle>
            <GiMoneyStack className="text-[#C29E3C] text-2xl ml-2 " />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-white mt-5">
            {financeData.moneyInput} €
          </h2>
        </CardContent>
        <div className="flex w-[200px] max-w-sm items-center space-x-2 mb-2 m-auto -mt-5">
          <Input
            id="moneyInput"
            type="text"
            placeholder="Apport/mois"
            className="bg-white"
            value={formData.moneyInput}
            onChange={handleChange}
          />
          <Button
            variant="outline"
            className=""
            onClick={() => updatePortfolioData(portfolioId, formData)}
          >
            <div className="text-[#C29E3C] ">Ajouter</div>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DashboardFinancialPart;
