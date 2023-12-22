"use client";
import {
  fetchPortfolioTotalGainOrLost,
  fetchPortfolioValue,
} from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { IoDiamondOutline } from "react-icons/io5";

const PortfolioValue = ({
  portfolioId,
  moneyInput,
}: {
  portfolioId: any;
  moneyInput: any;
}) => {
  const [portfolioValue, setPortfolioValue] = useState<number | null>(null);
  const [portfolioTotalGainOrLost, setPortfolioTotalGainOrLost] = useState<
    number | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPortfolioValue(portfolioId);
        setPortfolioValue(response);
        const gainOrLostResponse = await fetchPortfolioTotalGainOrLost(
          portfolioId
        );
        setPortfolioTotalGainOrLost(gainOrLostResponse);
      } catch (error) {
        console.error("Erreur:", error);
        setPortfolioValue(null);
      }
    };

    fetchData();
  }, [portfolioId]);

  const PourcentPortfolioValue = (
    ((portfolioValue - moneyInput) / moneyInput) *
    100
  ).toFixed(3);

  return (
    <Card className="w-[260px]  mt-[50px] bg-[#003F91] ml-5">
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-white">Valeur du portefeuille</CardTitle>
          <IoDiamondOutline className="text-white text-2xl ml-2 " />
        </div>
      </CardHeader>
      <CardContent>
        <div className="mr-3 mb-5 text-left">
          <h2 className="text-4xl font-bold text-white">{portfolioValue} €</h2>
          <h2 className=" font-bold text-white text-left">
            <div className="flex">
              <div className="mr-4">{portfolioTotalGainOrLost} €</div>
              <div>{PourcentPortfolioValue} %</div>
            </div>
          </h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioValue;
