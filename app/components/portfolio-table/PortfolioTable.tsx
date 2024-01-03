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
          <TableHead className="text-[#272838] text-xs ">Nom</TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            Pays
          </TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            Devise
          </TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            Catégories
          </TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            Capitalisation
          </TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            Nb de parts
          </TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            PRU
          </TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            prix de marché
          </TableHead>
          <TableHead className="text-[#272838] text-xs">Valeur PRU</TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            Valeur Marché
          </TableHead>
          <TableHead className="text-[#272838] text-xs">Gain/Perte</TableHead>
          <TableHead className="text-[#272838] text-xs">PV/MV</TableHead>
          <TableHead className="text-[#272838] hidden md:table-cell text-xs">
            Poids
          </TableHead>
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
                  className="rounded-full min-w-[30px]"
                />
              </TableCell>
              <TableCell className="font-medium text-[#272838]">
                <div>
                  <div>{name}</div>
                  <div className="text-slate-400 text-xs hidden md:block">
                    {ticker}
                  </div>
                  <div className="text-slate-400 text-xs md:hidden">
                    {numberOfStocks}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-[#272838] hidden md:table-cell">
                {country}
              </TableCell>
              <TableCell className="text-[#272838] hidden md:table-cell">
                {currency}
              </TableCell>
              <TableCell className="text-[#272838] hidden md:table-cell">
                {stockCategory}
              </TableCell>
              <TableCell className="text-[#272838] hidden md:table-cell">
                {capitalisation}
              </TableCell>

              <TableCell className="text-[#272838] hidden md:table-cell">
                {numberOfStocks}
              </TableCell>
              <TableCell className="text-[#272838] hidden md:table-cell">
                {pru} €
              </TableCell>
              <TableCell className="text-[#272838] hidden md:table-cell">
                {currentStockPrice} €
              </TableCell>
              <TableCell className="text-[#272838] ">{pruValue} €</TableCell>
              <TableCell className="text-[#272838] hidden md:table-cell">
                {marketValue} €
              </TableCell>
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
              <TableCell className="text-[#272838] hidden md:table-cell">
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
