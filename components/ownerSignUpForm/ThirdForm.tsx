import React, { useEffect, useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaWallet } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const ThirdForm = (props: {
  setShowThirdForm: (arg0: boolean) => void;
  numberOfInputsToShow: any;
  inputDisabledState: any[];
}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [portfolios, setPortfolios] = useState(
    Array.from({ length: 4 }, () => "")
  );
  const [hideAccesButton, setHideAccesButton] = useState(true);
  const [hideCreatPortfolioButton, setHideCreatPortfolioButton] =
    useState(false);

  async function handleThirdFormSubmit(e: React.SyntheticEvent) {
    console.log("3ieme forme et portfoioname");

    e.preventDefault();

    setIsLoading(true);

    const ownerId = localStorage.getItem("ownerId");
    const portfoliosData = portfolios
      .map((name) => ({
        name: name.trim(),
        portfolioOwnerId: ownerId,
      }))
      .filter((portfolio) => portfolio.name !== "");

    try {
      for (const portfolio of portfoliosData) {
        await handleCreatPortfolio(portfolio);
      }

      setIsLoading(false);
      props.setShowThirdForm(true);
      setHideAccesButton(false);
      setHideCreatPortfolioButton(true);
    } catch (error) {
      console.error("Error creating portfolios:", error);
      setIsLoading(false);
    }
  }

  const handleCreatPortfolio = async (data: any) => {
    console.log("data avant création", data);
    try {
      const token = localStorage.getItem("token");
      console.log("token for portoflio", token);

      if (!token) {
        throw new Error("No token found");
      }
      const response = await fetch("http://localhost:3001/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChangeThirdForm = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log(index, "index dans handleinput");
    const { value } = e.target;
    const updatedPortfolios = [...portfolios];
    updatedPortfolios[index] = value;
    setPortfolios(updatedPortfolios);
  };

  const handleLogOnPortfolios = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const ownerId = decodedToken.sub;
      Cookies.set("ownerId", ownerId);
      router.push("/my-portfolios/");
    }
  };
  return (
    <div className="grid gap-6 lg:w-[500px] m-auto">
      {/* Troisième formulaire ou contenu */}
      <h2 className="font-bold text-3xl m-auto ml-2 lg:ml-2">
        Pour finir, créez vos{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          portefeuilles
        </span>
      </h2>
      {/* Vos éléments de formulaire ou contenu supplémentaire ici */}
      <div className="grid gap-1">
        {[...Array(props.numberOfInputsToShow)].map((_, index) => (
          <div key={index}>
            <Label className="ml-2 lg:ml-2" htmlFor={`input-${index}`}>
              Portefeuille {index + 1}
            </Label>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-2 ">
              <Input
                id={`input-${index}`}
                placeholder={"Entrez le nom"}
                type="text"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                name="name"
                value={portfolios[index] || ""}
                disabled={isLoading || props.inputDisabledState[index]}
                onChange={(e) => handleInputChangeThirdForm(e, index)}
                className="lg:w-[490px] p-2"
              />
            </div>
          </div>
        ))}
      </div>
      {hideCreatPortfolioButton && (
        <p className="text-green-500 ml-3">Portefeuilles crées !</p> // Afficher le message une fois que le portefeuille est créé
      )}
      <Button
        className="mt-3 md:mt-3 lg:mt-0 lg:ml-3 bg-gradient-to-r from-blue-500 to-purple-500 m-2"
        onClick={(e) => handleThirdFormSubmit(e)}
        disabled={isLoading || hideCreatPortfolioButton}
      >
        {isLoading ? "Création en cours..." : "Créer les portefeuilles"}{" "}
        <FaWallet className="ml-2" />
      </Button>
      <Button
        className="m-2"
        onClick={handleLogOnPortfolios}
        disabled={hideAccesButton}
      >
        {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
        Accèder à mes portefeuilles
        <LuLogIn className="ml-2 text-xl" />
      </Button>
      <Link href="/" className="text-blue-500 underline m-auto text-sm">
        Retour au formulaire précédent
      </Link>
    </div>
  );
};

export default ThirdForm;
