import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaPenToSquare } from "react-icons/fa6";

import { cookies } from "next/headers";
import DashboardTable from "./DashboardTable";
import Buttons from "./Buttons";

const fetchPortfolioNames = async () => {
  const cookieStore = cookies();
  const cookieInformation = cookieStore.get("ownerId");
  const ownerId = cookieInformation.value;

  try {
    const response = await fetch(`http://localhost:3001/portfolio/${ownerId}`, {
      next: { tags: ["dashboard"] },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const DashboardTableTabs = async () => {
  const names = await fetchPortfolioNames();
  const numCols = names.length === 4 ? 4 : names.length;
  const firstPortfolioName = names[0].name;

  return (
    <Tabs
      defaultValue={firstPortfolioName}
      className="w-[1290px] ml-[424px] mt-[120px]"
    >
      <TabsList className={`grid w-full lg:grid-cols-${numCols}`}>
        {names.map((name) => (
          <TabsTrigger key={name.id} value={name.name} className=" ">
            {name.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {names.map((name) => (
        <TabsContent key={name.id} value={name.name}>
          <Card>
            <Buttons portfolioId={name.id} />
            <CardHeader>
              <CardTitle>
                <div className="flex text-[#003F91] text-xl items-center">
                  <FaPenToSquare className="mr-2" />
                  {name.name}
                </div>
              </CardTitle>
            </CardHeader>
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
