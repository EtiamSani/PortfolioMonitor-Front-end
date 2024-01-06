import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiMoneyStack, GiTwoCoins } from "react-icons/gi";

const FinancalPart = ({ financeData }: any) => {
  return (
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
          <h2 className="text-4xl font-bold text-white mt-5">
            {parseFloat(financeData.liquidity).toFixed(2)} €
          </h2>
        </CardContent>
      </Card>

      <Card className="w-[260px]  mt-[50px] bg-[#495582] h-[203px] hidden md:block ">
        <CardHeader>
          <div className="flex items-center">
            <CardTitle className="text-[#C29E3C]">Total apports</CardTitle>
            <GiMoneyStack className="text-[#C29E3C] text-2xl ml-2 " />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-white mt-5">
            {financeData.moneyInput} €
          </h2>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancalPart;
