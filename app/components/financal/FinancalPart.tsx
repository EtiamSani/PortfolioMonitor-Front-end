import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiMoneyStack, GiTwoCoins } from "react-icons/gi";

const FinancalPart = ({ financeData }: any) => {
  return (
    <div className="flex gap-5 ">
      <Card className="w-[260px] mt-[50px] border border-[#003F91] bg-white">
        {" "}
        <CardHeader>
          <div className="flex items-center">
            <CardTitle className="text-[#003F91]">Liquidités</CardTitle>
            <GiTwoCoins className="text-[#003F91] text-2xl ml-2 " />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-[#003F91]">
            {financeData.liquidity} €
          </h2>
        </CardContent>
      </Card>

      <Card className="w-[260px]  mt-[50px]  border border-[#003F91]">
        <CardHeader>
          <div className="flex items-center">
            <CardTitle className="text-[#003F91]">Total apports</CardTitle>
            <GiMoneyStack className="text-[#003F91] text-2xl ml-2 " />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-[#003F91]">
            {financeData.moneyInput} €
          </h2>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancalPart;
