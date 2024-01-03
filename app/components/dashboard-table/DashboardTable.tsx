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
import AddDividendsButton from "./AddDividendsButton";
import Image from "next/image";

const DashboardTable = ({ company }: any) => {
  let totalMarketValue = 0;
  return (
    <div className="m-auto">
      <Table className="w-[1200px] mt-[30px] ">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="text-[#272838]">Nom</TableHead>
            <TableHead className="text-[#272838]">Nb de parts</TableHead>
            <TableHead className="text-[#272838]">PRU</TableHead>
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
              marketValue,
              gainOrLoss,
              pvMvPercentage,
              pruValue,
              weight,
              logo,
            } = company;

            totalMarketValue += marketValue;
            return (
              <TableRow key={id}>
                <TableCell>
                  <Image
                    src={"http://localhost:3001" + logo}
                    alt={"company logo"}
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                </TableCell>
                <TableCell className="text-[#272838]">{name}</TableCell>
                <TableCell className="text-[#272838]">
                  {numberOfStocks}
                </TableCell>
                <TableCell className="text-[#272838]">{pru}</TableCell>
                <TableCell className="text-[#272838]">
                  <div className="flex gap-2 w-[330px]">
                    <BuyNewSharesButton companyId={companyId} />
                    <SellSharesButton companyId={companyId} />
                    <UpdateCompanyButton companyId={companyId} />
                    <AddDividendsButton companyId={companyId} />
                    <Button onClick={() => deleteCompany(companyId)}>
                      <BsBuildingFillX className="text-xl mr-3" />
                      <div>Supprimer</div>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;
