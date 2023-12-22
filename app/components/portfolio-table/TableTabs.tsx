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
import PortfolioSectorialAllocationPieChart from "../portfolio-graphics/PortfolioSectorialAllocationPieChart";
import PortfolioGeographicalAllocation from "../portfolio-graphics/PortfolioGeographicalAllocation";
import PortfolioCapitalizationAllocation from "../portfolio-graphics/PortfolioCapitalizationAllocation";
import PortfolioCurrencyAllocation from "../portfolio-graphics/PortfolioCurrencyAllocation";
import PortfolioPeterLynchAllocation from "../portfolio-graphics/PortfolioPeterLynchAllocation";
import { IoPieChartSharp } from "react-icons/io5";

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
          {names.map((name: any) => (
            <TabsTrigger key={name.id} value={name.name}>
              {name.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {names.map((name: any) => (
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

            <Card className="border border-[#003F91] h-auto">
              <CardHeader>
                <CardTitle>
                  <div className="flex text-[#003F91] text-xl items-center">
                    <IoPieChartSharp className="mr-2 text-2xl" />
                    Graphiques
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 ">
                <div className=" grid grid-cols-2 gap-[5rem]">
                  <div className="w-[600px] h-[600px]">
                    <h2 className="text-md text-[#003F91] text-center mb-3 font-semibold">
                      Mon Portefeuille
                    </h2>
                    <PortfolioPositionPieChart
                      company={name.PortfolioCompany}
                    />
                  </div>
                  <div className="w-[600px] h-[600px]">
                    <h2>Allocation sectorielle (GICS)</h2>
                    <PortfolioSectorialAllocationPieChart
                      company={name.PortfolioCompany}
                    />
                  </div>
                  <div className="w-[600px] h-[600px]">
                    <h2>Allocation géographique</h2>
                    <PortfolioGeographicalAllocation
                      company={name.PortfolioCompany}
                    />
                  </div>
                  <div className="w-[600px] h-[600px]">
                    <h2>Allocation par taille d'entreprise</h2>
                    <PortfolioCapitalizationAllocation
                      company={name.PortfolioCompany}
                    />
                  </div>
                  <div className="w-[600px] h-[600px]">
                    <h2>Allocation par devise</h2>
                    <PortfolioCurrencyAllocation
                      company={name.PortfolioCompany}
                    />
                  </div>
                  <div className="w-[600px] h-[600px]">
                    <h2>Allocation a la P.Lynch</h2>
                    <PortfolioPeterLynchAllocation
                      company={name.PortfolioCompany}
                    />
                  </div>
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
