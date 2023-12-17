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

const DashboardTable = ({ company }: any) => {
  const handleDeleteCompany = async (companyId: string) => {
    try {
      console.log("Trying to delete company with ID:", companyId);
      // Envoie de la requête DELETE à l'API
      const response = await fetch(
        `http://localhost:3001/company/delete-company/${companyId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Actualiser l'affichage après suppression de l'entreprise
        // onDeleteCompany(companyId);
        console.log("cest suppp");
      } else {
        throw new Error("Erreur lors de la suppression de l'entreprise");
      }
    } catch (error) {
      console.error(error);
      // Gérer les erreurs ou afficher un message à l'utilisateur
    }
  };
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
                <TableCell>{per}</TableCell>
                <TableCell>{numberOfStocks}</TableCell>
                <TableCell>{pru}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button className="bg-[#003F91] p-5 hover:bg-[#1B98E0]">
                      <GiPayMoney className="text-xl mr-3" />
                      <div>Achat</div>
                    </Button>
                    <Button className="bg-[#003F91] p-5 hover:bg-[#1B98E0]">
                      <GiReceiveMoney className="text-xl mr-3" />
                      <div>Vente</div>
                    </Button>
                    <Button className="bg-[#003F91] p-5 hover:bg-[#1B98E0]">
                      <BsBuildingFillGear className="text-xl mr-3" />
                      <div>Modifier</div>
                    </Button>
                    <Button
                      className="bg-[#003F91] p-5 hover:bg-[#1B98E0] "
                      onClick={() => handleDeleteCompany(companyId)}
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
