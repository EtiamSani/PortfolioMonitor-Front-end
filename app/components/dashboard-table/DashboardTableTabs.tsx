import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cookies } from "next/headers";
import DashboardTable from "./DashboardTable";

const fetchPortfolioNames = async () => {
  const cookieStore = cookies();
  const cookieInformation = cookieStore.get("ownerId");
  const ownerId = cookieInformation.value;
  try {
    const response = await fetch(`http://localhost:3001/portfolio/${ownerId}`, {
      cache: "no-store",
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
  console.log(numCols);

  return (
    <Tabs defaultValue="account" className="w-[850px] ml-[600px] mt-[80px]">
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
            <CardHeader>
              <CardTitle>{name.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <DashboardTable name={name.name} />
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DashboardTableTabs;
