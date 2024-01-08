import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaRegNewspaper } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { GiMoneyStack, GiTwoCoins } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

function LoadingTableRow() {
  return (
    <TableRow>
      <TableCell className="font-medium text-[#272838]">
        <Skeleton className="h-12 w-12 rounded-full" />
      </TableCell>
      <TableCell className="font-medium text-[#272838]">
        <div>
          <div>
            {" "}
            <Skeleton className="h-4 w-[50px]" />
          </div>
          <div className="text-slate-400 text-xs hidden md:block">
            <Skeleton className="h-4 w-[50px]" />
          </div>
          <div className="text-slate-400 text-xs md:hidden">
            <Skeleton className="h-4 w-[50px]" />
          </div>
        </div>
      </TableCell>
      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>

      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="text-[#272838] ">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell
        className="
                  text-green-500"
      >
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell
        className="
                text-green-500"
      >
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="text-[#272838] hidden md:table-cell">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
    </TableRow>
  );
}

export default function Loading() {
  const numberOfRows = 8;
  return (
    <div className="flex flex-col m-auto lg:m-0">
      <Tabs
        defaultValue="Hello"
        className="lg:w-[1290px] lg:ml-[420px] mt-[240px] w-[350px]"
      >
        <TabsList className="lg:grid  lg:grid-cols-4 lg:w-[290px] bg-slate-200 text-[#272838] mb-5 mt-20">
          <TabsTrigger value="rrr">
            <Skeleton className="h-4 w-[250px]" />
          </TabsTrigger>
        </TabsList>

        <div className="absolute top-10 flex items-baseline">
          <div className="flex gap-5 ">
            <Card className="w-[260px] mt-[50px] bg-[#495582] h-[203px] hidden md:block">
              {" "}
              <CardHeader>
                <div className="flex items-center">
                  <CardTitle className="text-[#C29E3C]">Liquidités</CardTitle>
                  <GiTwoCoins className="text-[#C29E3C] text-2xl ml-2 " />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mt-5 flex items-center">
                  <div>
                    <Skeleton className="w-[150px] h-[50px]" />
                  </div>
                  <div>€</div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[260px]  mt-[50px] bg-[#495582] h-[203px] hidden md:block ">
              <CardHeader>
                <div className="flex items-center">
                  <CardTitle className="text-[#C29E3C]">
                    Total apports
                  </CardTitle>
                  <GiMoneyStack className="text-[#C29E3C] text-2xl ml-2 " />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white mt-5 flex items-center">
                  <div>
                    <Skeleton className="w-[150px] h-[50px]" />
                  </div>
                  <div>€</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="lg:w-[260px] w-[340px] lg:h-[203px] lg:mt-[50px]  bg-[#495582] shadow-md lg:ml-5 ">
            <CardHeader>
              <div className="flex items-center">
                <CardTitle className="text-[#C29E3C]">
                  Valeur du portefeuille
                </CardTitle>
                <IoDiamondOutline className="text-[#C29E3C] text-2xl ml-2 " />
              </div>
            </CardHeader>
            <CardContent>
              <div className="mr-3 mb-5 text-left">
                <div className="text-4xl font-bold text-white mt-5 flex items-center">
                  <div>
                    <Skeleton className=" w-[150px] h-[50px]" />
                  </div>
                  <div>€</div>
                </div>
                <h2 className=" font-bold text-white text-left">
                  <div className="flex">
                    <div className="mr-4">
                      <span className="text-green-500">
                        <Skeleton className="h-4 w-[50px]" />
                      </span>
                    </div>
                    <div>
                      <span className="text-green-500">
                        <Skeleton className="h-4 w-[50px]" />
                      </span>
                    </div>
                  </div>
                </h2>
              </div>
            </CardContent>
          </Card>
          <Card className="ml-5 w-[450px] h-auto  mt-[52px] z-10 bg-[#495582] hidden md:block">
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
                  <AccordionTrigger className="text-white">
                    Achats
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-white">
                    Vente
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-gray-200 mb-5">
          <CardHeader>
            <CardTitle>
              <div className="flex text-[#272838] text-xl items-center">
                <FaWallet className="mr-2" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
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
                  <TableHead className="text-[#272838] text-xs">
                    Valeur PRU
                  </TableHead>
                  <TableHead className="text-[#272838] hidden md:table-cell text-xs">
                    Valeur Marché
                  </TableHead>
                  <TableHead className="text-[#272838] text-xs">
                    Gain/Perte
                  </TableHead>
                  <TableHead className="text-[#272838] text-xs">
                    PV/MV
                  </TableHead>
                  <TableHead className="text-[#272838] hidden md:table-cell text-xs">
                    Poids
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: numberOfRows }, (_, index) => (
                  <LoadingTableRow key={index} />
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
