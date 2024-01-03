"use client";
import React, { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const OwnerSignInForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    handleSignIn(formData);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async (data: any) => {
    console.log(data);
    try {
      const response = await fetch(
        "http://localhost:3001/auth-portfolio-owner/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Sign-up request failed");
      }

      const responseData = await response.json();
      const signinToken = responseData.access_token;
      if (signinToken) {
        localStorage.setItem("token", signinToken);
        const decodedToken = jwtDecode(responseData.access_token);
        const ownerId = decodedToken.sub;
        Cookies.set("ownerId", ownerId);
        router.push("/my-portfolios/");
        if (typeof ownerId !== "undefined") {
          localStorage.setItem("ownerId", ownerId);
        }
      }
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="grid lg:grid-cols-2 justify-items-center mt-[300px] md:mt-[300px] sm:mt-[300px] lg:mt-0">
      <div className="bg-[#495582] w-full hidden lg:block lg:h-screen">
        <div className="relative h-full w-full bg-[#495582]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <h1 className="text-white grid justify-items-center text-7xl font-bold text-center mt-10">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-800 text-transparent bg-clip-text">
                EIP{" "}
              </span>{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-800 text-transparent bg-clip-text">
                Portfolio
              </span>
            </h1>
          </div>
          <div className="absolute left-0 right-0 bottom-12 text-center text-white">
            <h2 className="text-3xl font-bold">
              Suivez dès maintenant{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-800 text-transparent bg-clip-text">
                tout
              </span>{" "}
              mes investissements <br /> PEA et CTO{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-800 text-transparent bg-clip-text">
                en temps réel !{" "}
              </span>
            </h2>
          </div>
          <div className="absolute left-0 right-0 top-[-10%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="grid gap-6 lg:w-[500px] m-auto">
        <form onSubmit={onSubmit}>
          <div className="grid gap-5">
            <h2 className="font-bold text-3xl m-auto">Me connecter</h2>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative grid gap-1">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                type={showPassword ? "text" : "password"}
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect="off"
                disabled={isLoading}
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="h-5 w-5 mt-5 text-black" />
                ) : (
                  <AiOutlineEye className="h-5 w-5 text-black mt-5" />
                )}
              </button>
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Connecter
            </Button>
          </div>
        </form>
        <Link
          href="/mot-de-passe-oublie"
          className="text-blue-500 underline m-auto text-sm"
        >
          Mot de passe oublié ?
        </Link>
      </div>
    </div>
  );
};

export default OwnerSignInForm;
