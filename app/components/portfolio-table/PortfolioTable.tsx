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

const PortfolioTable = async ({ company, portfolioId }: any) => {
  const portfolioValue = await fetchPortfolioValue(portfolioId);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#003F91]">Nom</TableHead>
          <TableHead className="text-[#003F91]">Pays</TableHead>
          <TableHead className="text-[#003F91]">Devise</TableHead>
          <TableHead className="text-[#003F91]">Catégories</TableHead>
          <TableHead className="text-[#003F91]">Capitalisation</TableHead>
          <TableHead className="text-[#003F91]">Nb de parts</TableHead>
          <TableHead className="text-[#003F91]">PRU</TableHead>
          <TableHead className="text-[#003F91]">prix de marché</TableHead>
          <TableHead className="text-[#003F91]">Valeur PRU</TableHead>
          <TableHead className="text-[#003F91]">Valeur Marché</TableHead>
          <TableHead className="text-[#003F91]">Gain/Perte</TableHead>
          <TableHead className="text-[#003F91]">PV/MV</TableHead>
          <TableHead className="text-[#003F91]">Poids</TableHead>
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
          } = company;

          return (
            <TableRow key={id}>
              <TableCell className="font-medium text-[#003F91]">
                {name}
              </TableCell>
              <TableCell className="text-[#003F91]">{country}</TableCell>
              <TableCell className="text-[#003F91]">{currency}</TableCell>
              <TableCell className="text-[#003F91]">{stockCategory}</TableCell>
              <TableCell className="text-[#003F91]">{capitalisation}</TableCell>

              <TableCell className="text-[#003F91]">{numberOfStocks}</TableCell>
              <TableCell className="text-[#003F91]">{pru} €</TableCell>
              <TableCell className="text-[#003F91]">
                {currentStockPrice} €
              </TableCell>
              <TableCell className="text-[#003F91]">{pruValue} €</TableCell>
              <TableCell className="text-[#003F91]">{marketValue} €</TableCell>
              <TableCell className="text-[#003F91]">{gainOrLoss} €</TableCell>
              <TableCell className="text-[#003F91]">
                {pvMvPercentage}%
              </TableCell>
              <TableCell className="text-[#003F91]">
                {(marketValue / portfolioValue) * 100}%
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default PortfolioTable;
