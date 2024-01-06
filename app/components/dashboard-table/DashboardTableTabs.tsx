import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaPenToSquare } from "react-icons/fa6";


import DashboardTable from "./DashboardTable";
import AddCompanyButtons from "./AddCompanyButton";
import DashboardFinancialPart from "../financal/DashboardFinancialPart";

import { fetchPortfolioNames } from "@/app/actions";
import PortfolioValue from "../financal/PortfolioValue";

const DashboardTableTabs = async () => {
  const names = await fetchPortfolioNames();
  const numCols = names.length === 4 ? 4 : names.length;
  const firstPortfolioName = names[0].name;

  return (
    <Tabs
      defaultValue={firstPortfolioName}
      className="w-[1290px] ml-[420px] mt-[240px] "
    >
      <TabsList
        className={`grid w-full lg:grid-cols-${numCols} w-[290px] bg-slate-200 text-[#272838] mb-5 mt-10`}
      >
        {names.map((name: any) => (
          <TabsTrigger key={name.id} value={name.name}>
            {name.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {names.map((name: any) => (
        <TabsContent key={name.id} value={name.name}>
          <div className="absolute top-0 flex">
            <DashboardFinancialPart portfolioId={name.id} financeData={name} />
            <PortfolioValue
              portfolioId={name.id}
              moneyInput={name.moneyInput}
            />
          </div>
          <Card className="border border-gray-200 mb-5">
            <div className="grid grid-cols-2">
              <CardHeader>
                <CardTitle>
                  <div className="flex text-[#272838] text-xl items-center">
                    <FaPenToSquare className="mr-2 text-[#272838]" />
                    {name.name}
                  </div>
                </CardTitle>
              </CardHeader>
              <AddCompanyButtons portfolioId={name.id} />
            </div>
            <CardContent className="space-y-2">
              <DashboardTable
                name={name.name}
                company={name.PortfolioCompany}
              />
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DashboardTableTabs;
