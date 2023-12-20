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


const PortfolioTable = ({ company }: any) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nom</TableHead>
          <TableHead>Pays</TableHead>
          <TableHead>Devise</TableHead>
          <TableHead>Catégories</TableHead>
          <TableHead>Capitalisation</TableHead>
          <TableHead>PER</TableHead>
          <TableHead>Nb de parts</TableHead>
          <TableHead>PRU</TableHead>
          <TableHead>prix de marché</TableHead>
          <TableHead>Valeur PRU</TableHead>
          <TableHead>Gain/Perte</TableHead>
          <TableHead>PV/MV</TableHead>
          <TableHead>Poids</TableHead>
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
            high52,
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
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{country}</TableCell>
              <TableCell>{currency}</TableCell>
              <TableCell>{stockCategory}</TableCell>
              <TableCell>{capitalisation}</TableCell>
              <TableCell>{per}</TableCell>
              <TableCell>{numberOfStocks}</TableCell>
              <TableCell>{pru}</TableCell>
              <TableCell>{marketValue} €</TableCell>
              <TableCell>{pruValue} €</TableCell>
              <TableCell>{gainOrLoss} €</TableCell>
              <TableCell>{pvMvPercentage}%</TableCell>
              <TableCell>{pru}%</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default PortfolioTable;
