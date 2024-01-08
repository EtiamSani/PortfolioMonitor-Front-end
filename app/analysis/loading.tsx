import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Loading() {
  const numberOfCards = 6;

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < numberOfCards; i++) {
      cards.push(
        <Card
          key={i}
          className="border border-slate-200 h-[350px] w-[350px]  gap-4 my-5"
        >
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-4 w-[150px]" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <p className="font-bold mr-1">Catégorie : </p>
              <span>
                <Skeleton className="h-4 w-[50px]" />
              </span>
            </div>

            <div className="flex items-center">
              <p className="font-bold mr-1">Support : </p>
              <span>
                <Skeleton className="h-4 w-[50px]" />
              </span>
            </div>

            <div className="flex items-center">
              <p className="font-bold mr-1">Fair value : </p>
              <span>
                <Skeleton className="h-4 w-[50px]" />
              </span>
            </div>

            <div className="flex items-center">
              <p className="font-bold mr-1">Prix d'entrée : </p>
              <span>
                <Skeleton className="h-4 w-[50px]" />
              </span>
            </div>
          </CardContent>
          <CardFooter className="w-[340px]">
            <div className="w-full">
              <Button className="w-full mb-3 bg-[#495582]">Resumé</Button>

              <Button className="w-full bg-[#495582] ">
                <HiOutlineDocumentDownload className="text-2xl" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      );
    }
    return cards;
  };

  return <div className="grid grid-cols-3 gap-4">{renderCards()}</div>;
}
