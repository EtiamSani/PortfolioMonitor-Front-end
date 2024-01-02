import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchPortfolioValue } from "@/app/actions";
import Image from "next/image";

const PortfolioTable = async ({ company, portfolioId }: any) => {
  const portfolioValue = await fetchPortfolioValue(portfolioId);
  return (
    <Table>
      <TableCaption>
        Les données sont actualisé tout les jours après clôture à 23h00
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#272838]"></TableHead>
          <TableHead className="text-[#272838]">Nom</TableHead>
          <TableHead className="text-[#272838]">Pays</TableHead>
          <TableHead className="text-[#272838]">Devise</TableHead>
          <TableHead className="text-[#272838]">Catégories</TableHead>
          <TableHead className="text-[#272838]">Capitalisation</TableHead>
          <TableHead className="text-[#272838]">Nb de parts</TableHead>
          <TableHead className="text-[#272838]">PRU</TableHead>
          <TableHead className="text-[#272838]">prix de marché</TableHead>
          <TableHead className="text-[#272838]">Valeur PRU</TableHead>
          <TableHead className="text-[#272838]">Valeur Marché</TableHead>
          <TableHead className="text-[#272838]">Gain/Perte</TableHead>
          <TableHead className="text-[#272838]">PV/MV</TableHead>
          <TableHead className="text-[#272838]">Poids</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {company.map((oneCompany: any) => {
          const { id, createdAt, company } = oneCompany;
          const {
            name,
            ticker,
            currency,
            type,
            capitalisation,
            per,
            low52,
            currentStockPrice,
            volume,
            numberOfStocks,
            pru,
            stockCategory,
            gics,
            country,
            marketValue,
            gainOrLoss,
            pvMvPercentage,
            pruValue,
            weight,
            annualDividend,
            logo,
          } = company;

          return (
            <TableRow key={id}>
              <TableCell className="font-medium text-[#272838]">
                <Image
                  src={"http://localhost:3001" + logo}
                  alt={"company logo"}
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </TableCell>
              <TableCell className="font-medium text-[#272838]">
                <div>
                  <div>{name}</div>
                  <div className="text-slate-400 text-xs">{ticker}</div>
                </div>
              </TableCell>
              <TableCell className="text-[#272838]">{country}</TableCell>
              <TableCell className="text-[#272838]">{currency}</TableCell>
              <TableCell className="text-[#272838]">{stockCategory}</TableCell>
              <TableCell className="text-[#272838]">{capitalisation}</TableCell>

              <TableCell className="text-[#272838]">{numberOfStocks}</TableCell>
              <TableCell className="text-[#272838]">{pru} €</TableCell>
              <TableCell className="text-[#272838]">
                {currentStockPrice} €
              </TableCell>
              <TableCell className="text-[#272838]">{pruValue} €</TableCell>
              <TableCell className="text-[#272838]">{marketValue} €</TableCell>
              <TableCell
                className={`text-[#272838] ${
                  gainOrLoss < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {gainOrLoss.toFixed(2)} €
              </TableCell>
              <TableCell
                className={`text-[#272838] ${
                  pvMvPercentage < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {pvMvPercentage}%
              </TableCell>
              <TableCell className="text-[#272838]">
                {((marketValue / portfolioValue) * 100).toFixed(2)}%
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default PortfolioTable;
