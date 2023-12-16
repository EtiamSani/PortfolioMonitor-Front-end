import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioTable from "./PortfolioTable";
import { cookies } from "next/headers";

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

const TableTabs = async () => {
  const names = await fetchPortfolioNames();
  const numCols = names.length === 4 ? 4 : names.length;
  console.log(numCols);

  return (
    <Tabs defaultValue="account" className="w-[1250px] ml-[400px] mt-[80px]">
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
              <PortfolioTable name={name.name} />
            </CardContent>
          </Card>
        </TabsContent>
      ))}
      {/* <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent> */}
    </Tabs>
  );
};

export default TableTabs;
