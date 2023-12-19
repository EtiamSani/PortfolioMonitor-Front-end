"use client";
import { Button } from "@/components/ui/button";
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
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { BsBuildingFillGear } from "react-icons/bs";
import { BsBuildingFillX } from "react-icons/bs";
import { deleteCompany } from "@/app/actions";
import UpdateCompanyButton from "./UpdateCompanyButton";
import BuyNewSharesButton from "./BuyNewSharesButton";
import SellSharesButton from "./SellSharesButton";

const DashboardTable = ({ company }: any) => {
  return (
    <div className="m-auto">
      <Table className="w-[1200px] mt-[30px] ">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nom</TableHead>
            <TableHead>Pays</TableHead>
            <TableHead>Devise</TableHead>
            <TableHead>Catégories</TableHead>
            <TableHead>Capitalisation</TableHead>
            <TableHead>Nb de parts</TableHead>
            <TableHead>PRU</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {company.map((oneCompany: any) => {
            const { id, createdAt, company, companyId } = oneCompany;
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
              annualDividend,
            } = company;

            return (
              <TableRow key={id}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{country}</TableCell>
                <TableCell>{currency}</TableCell>
                <TableCell>{stockCategory}</TableCell>
                <TableCell>{capitalisation}</TableCell>
                <TableCell>{numberOfStocks}</TableCell>
                <TableCell>{pru}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <BuyNewSharesButton companyId={companyId} />
                    <SellSharesButton companyId={companyId} />
                    <UpdateCompanyButton companyId={companyId} />
                    <Button
                      className="bg-[#003F91] p-5 hover:bg-[#1B98E0] "
                      onClick={() => deleteCompany(companyId)}
                    >
                      <BsBuildingFillX className="text-xl mr-3" />
                      <div>Supprimer</div>
                    </Button>
                  </div>
                </TableCell>
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
    </div>
  );
};

export default DashboardTable;
