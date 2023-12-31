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
    <Card className="lg:w-[260px] w-[340px] lg:h-[203px] lg:mt-[50px]  bg-[#495582] shadow-md lg:ml-5 ">
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
          <h2 className="text-4xl font-bold text-white mt-5">
            {parseFloat(portfolioValue).toFixed(2)} €
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
                  {parseFloat(portfolioTotalGainOrLost).toFixed(2)} €
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
                  ({parseFloat(PourcentPortfolioValue).toFixed(2)} %)
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
