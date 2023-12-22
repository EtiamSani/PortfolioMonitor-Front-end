import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioTable from "./PortfolioTable";
import { FaWallet } from "react-icons/fa";
import { fetchPortfolioNames } from "@/app/actions";

import PortfolioValue from "../financal/PortfolioValue";
import FinancalPart from "../financal/FinancalPart";
import LastsTransactions from "../financal/LastsTransactions";
import DividendsTable from "../dividends/DividendsTable";
import PortfolioPositionPieChart from "../portfolio-graphics/PortfolioPositionPieChart";

const TableTabs = async () => {
  const names = await fetchPortfolioNames();
  const firstPortfolioName = names[0].name;

  const numCols = names.length === 4 ? 4 : names.length;

  return (
    <div className="flex flex-col">
      <Tabs
        defaultValue={firstPortfolioName}
        className="w-[1290px] ml-[300px] mt-[260px]"
      >
        <TabsList
          className={`grid w-full lg:grid-cols-${numCols} w-[290px] bg-[#003F91] text-white`}
        >
          {names.map((name) => (
            <TabsTrigger key={name.id} value={name.name}>
              {name.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {names.map((name) => (
          <TabsContent key={name.id} value={name.name}>
            <div className="absolute top-10 flex items-baseline">
              <FinancalPart portfolioId={name.id} financeData={name} />
              <PortfolioValue
                portfolioId={name.id}
                moneyInput={name.moneyInput}
              />
              <LastsTransactions />
            </div>
            <Card className="border border-[#003F91] mb-5">
              <CardHeader>
                <CardTitle>
                  <div className="flex text-[#003F91] text-xl items-center">
                    <FaWallet className="mr-2" />
                    {name.name}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <PortfolioTable
                  company={name.PortfolioCompany}
                  portfolioId={name.id}
                />
              </CardContent>

              <CardHeader>
                <CardTitle>
                  <div className="flex text-[#003F91] text-xl items-center">
                    <FaWallet className="mr-2" />
                    Dividendes
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <DividendsTable company={name.PortfolioCompany} />
              </CardContent>
            </Card>

            <Card className="border border-[#003F91]">
              <CardHeader>
                <CardTitle>
                  <div className="flex text-[#003F91] text-xl items-center">
                    <FaWallet className="mr-2" />
                    Graphiques
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="w-[600px] h-[600px]">
                  <PortfolioPositionPieChart company={name.PortfolioCompany} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TableTabs;
