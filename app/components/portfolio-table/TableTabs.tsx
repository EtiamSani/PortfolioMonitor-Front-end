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
    <div className="flex flex-col m-auto lg:m-0">
      <Tabs
        defaultValue={firstPortfolioName}
        className="lg:w-[1290px] lg:ml-[420px] mt-[240px] w-[350px]"
      >
        <TabsList
          className={`lg:grid lg:w-full lg:grid-cols-${numCols} lg:w-[290px] bg-slate-200 text-[#272838] mb-5 mt-10`}
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
            <Card className="border border-gray-200 mb-5">
              <CardHeader>
                <CardTitle>
                  <div className="flex text-[#272838] text-xl items-center">
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
                  <div className="flex text-[#272838] text-xl items-center">
                    <FaWallet className="mr-2" />
                    Dividendes
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <DividendsTable company={name.PortfolioCompany} />
              </CardContent>
            </Card>

            <Card className="border border-gray-200 h-auto mb-5">
              <CardHeader>
                <CardTitle>
                  <div className="flex text-[#272838] text-xl items-center">
                    <IoPieChartSharp className="mr-2 text-2xl" />
                    Graphiques
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[5rem]">
                  <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]">
                    <h2 className="text-md text-[#272838] text-center mb-3 font-semibold">
                      Mon Portefeuille
                    </h2>
                    <PortfolioPositionPieChart
                      company={name.PortfolioCompany}
                      portfolioData={name}
                    />
                  </div>
                  <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]">
                    <h2 className="text-md text-[#272838] text-center mb-3 font-semibold">
                      Allocation sectorielle (GICS)
                    </h2>
                    <PortfolioSectorialAllocationPieChart
                      company={name.PortfolioCompany}
                      portfolioData={name}
                    />
                  </div>
                  <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]">
                    <h2 className="text-md text-[#272838] text-center mb-3 font-semibold">
                      Allocation géographique
                    </h2>
                    <PortfolioGeographicalAllocation
                      company={name.PortfolioCompany}
                    />
                  </div>
                  <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]">
                    <h2 className="text-md text-[#272838] text-center mb-3 font-semibold">
                      Allocation par taille d'entreprise
                    </h2>
                    <PortfolioCapitalizationAllocation
                      company={name.PortfolioCompany}
                      portfolioData={name}
                    />
                  </div>
                  <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px]">
                    <h2 className="text-md text-[#272838] text-center mb-3 font-semibold">
                      Allocation par devise
                    </h2>
                    <PortfolioCurrencyAllocation
                      company={name.PortfolioCompany}
                    />
                  </div>
                  <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] mb-5">
                    <h2 className="text-md text-[#272838] text-center mb-3 font-semibold">
                      Allocation a la P.Lynch
                    </h2>
                    <PortfolioPeterLynchAllocation
                      company={name.PortfolioCompany}
                      portfolioData={name}
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
