import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const DividendsTable = ({ company }: any) => {
  return (
    <Table className="w-[900px] ml-5">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#003F91]">Nom</TableHead>
          <TableHead className="text-[#003F91]">Dividendes annuel</TableHead>
          <TableHead className="text-[#003F91]">Dividendes reçu</TableHead>
          <TableHead className="text-[#003F91]">Rendement</TableHead>
          <TableHead className="text-[#003F91]">Rendement sur coût</TableHead>
          <TableHead className="text-[#003F91]">Revenu</TableHead>
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
            annualDividends,
            dividendsReceived,
          } = company;

          return (
            <TableRow key={id}>
              <TableCell className="font-medium text-[#003F91]">
                {name}
              </TableCell>
              <TableCell className="text-[#003F91]">
                {annualDividends}
              </TableCell>
              <TableCell className="text-[#003F91]">
                {dividendsReceived}
              </TableCell>
              <TableCell className="text-[#003F91]">
                {((annualDividends / currentStockPrice) * 100).toFixed(2)}%
              </TableCell>
              <TableCell className="text-[#003F91]">
                {((annualDividends / pru) * 100).toFixed(2)}%
              </TableCell>

              <TableCell className="text-[#003F91]">
                {(numberOfStocks * annualDividends).toFixed(2)} €
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DividendsTable;
