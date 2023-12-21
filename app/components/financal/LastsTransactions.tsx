import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";

const LastsTransactions = () => {
  return (
    <Card className="border border-[#003F91] ml-5 w-[450px] h-[180px] mt-[52px]">
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="text-[#003F91]">
            Dernière transactions
          </CardTitle>
          <FaRegNewspaper className="text-[#003F91] text-2xl ml-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2"></CardContent>
    </Card>
  );
};

export default LastsTransactions;
