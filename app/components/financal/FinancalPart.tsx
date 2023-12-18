import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FinancalPart = () => {
  return (
    <div className="flex gap-5">
      <Card className="w-[260px] ml-[400px] mt-[50px] border-none bg-[#1B98E0]">
        {" "}
        <CardHeader>
          <CardTitle className="text-[#FAFAFA]">Liquidités</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-4xl font-bold text-[#FAFAFA]">1.000.000€</h2>
        </CardContent>
      </Card>

      <Card className="w-[300px]  mt-[50px]  bg-[#FAFAFA]">
        <CardHeader>
          <CardTitle className="text-[#1B98E0]">Total apports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mr-3 mb-5">
            <h2 className="text-4xl font-bold text-[#1B98E0]">1.000.000€</h2>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[300px]  mt-[50px] bg-[#003F91]">
        <CardHeader>
          <CardTitle className="text-white">Valeur du portefeuille</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mr-3 mb-5">
            <h2 className="text-4xl font-bold text-[#E5F4E3]">1.000.000€</h2>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[300px]  mt-[50px] bg-[#003F91]">
        <CardHeader>
          <CardTitle className="text-white">PV/MV</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mr-3 mb-5">
            <h2 className="text-4xl font-bold text-[#E5F4E3]">1.000.000€</h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancalPart;
