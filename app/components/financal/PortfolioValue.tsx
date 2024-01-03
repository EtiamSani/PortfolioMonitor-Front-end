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
    <Card className="w-[260px]  h-[203px] mt-[50px] bg-[#495582] shadow-md ml-5">
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-[#C29E3C]">
            Valeur du portefeuille
          </CardTitle>
          <IoDiamondOutline className="text-[#C29E3C] text-2xl ml-2 " />
        </div>
      </CardHeader>
      <CardContent>
        <div className="mr-3 mb-5 text-left">
          <h2 className="text-5xl font-bold text-white mt-5">
            {portfolioValue} €
          </h2>
          <h2 className=" font-bold text-white text-left">
            <div className="flex">
              <div className="mr-4">
                <span
                  className={
                    portfolioTotalGainOrLost < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {portfolioTotalGainOrLost} €
                </span>
              </div>
              <div>
                <span
                  className={
                    PourcentPortfolioValue < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  ({PourcentPortfolioValue} %)
                </span>
              </div>
            </div>
          </h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioValue;
