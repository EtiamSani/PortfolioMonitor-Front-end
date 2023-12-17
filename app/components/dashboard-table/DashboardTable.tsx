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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const DashboardTable = () => {
  return (
    <div className="m-auto">
      <Table className="w-[800px] mt-[30px]">
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
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
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
                  <Button className="bg-[#003F91] p-5 hover:bg-[#1B98E0]">
                    <BsBuildingFillX className="text-xl mr-3" />
                    <div>Supprimer</div>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
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
