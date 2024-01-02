import { fetchBoughtShares, fetchSoldShares } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const LastsTransactions = async () => {
  const boughtShares = await fetchBoughtShares();
  const soldShares = await fetchSoldShares();
  return (
    <Card className="ml-5 w-[450px] h-auto  mt-[52px] z-10 bg-white border border-gray-200 ">
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-[#C29E3C]">
            Dernières transactions
          </CardTitle>
          <FaRegNewspaper className="text-[#C29E3C] text-2xl ml-2" />
        </div>
      </CardHeader>

      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#272838]">
              Achats
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {boughtShares.map((bought, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-[#272838]">
                        {bought.numberOfStocks}
                      </TableCell>
                      <TableCell className="text-[#272838]">
                        {bought.nature}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="border-[#272838] text-[#272838]"
                        >
                          {bought.priceOfShare} €
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#272838]">
                        {formatDate(bought.createdAt)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#272838]">
              Vente
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {soldShares.map((sold, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-[#272838]">
                        {sold.numberOfStocks}
                      </TableCell>
                      <TableCell className="text-[#272838]">
                        {sold.nature}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="border-[#272838] text-[#272838]"
                        >
                          {sold.priceOfShare} €
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#272838]">
                        {formatDate(sold.createdAt)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default LastsTransactions;
