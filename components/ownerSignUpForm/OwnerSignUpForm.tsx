"use client"
import React, { useState } from 'react'
import { ReloadIcon } from "@radix-ui/react-icons"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from '../ui/button'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const OwnerSignUpForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [showThirdForm, setShowThirdForm] = useState(false);

    const [numberOfInputsToShow, setNumberOfInputsToShow] = useState<number>(0);
    const [selectedButton, setSelectedButton] = useState<number>(0);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false);
      if (!showSecondForm) {
        setShowSecondForm(true); 
    } else if (!showThirdForm) {
        setShowThirdForm(true); 
    }
    }, 3000)
  }

  async function handleSecondFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
        setIsLoading(false);
        setShowThirdForm(true);
    }, 3000);
}

    return (
        <div className='grid lg:grid-cols-2 justify-items-center mt-[300px] md:mt-[300px] sm:mt-[300px] lg:mt-0'>
            <div className='bg-black w-full hidden lg:block lg:h-screen'>
              <div className="relative h-full w-full bg-black">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                  <h1 className='text-white grid justify-items-center text-7xl font-bold text-center mt-10'><span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">EIP </span> Portfolio</h1>
                </div>
                <div className="absolute left-0 right-0 bottom-12 text-center text-white">
                  <h2 className='text-3xl font-bold'>Permettez de suivre <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">tout</span> vos investissements <br/> PEA et CTO <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">en temps réel ! </span></h2>
                </div>
              <div className="absolute left-0 right-0 top-[-10%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
              </div>
              </div>
            </div>
            {!showSecondForm && !showThirdForm && (
        <div className="grid gap-6 lg:w-[500px] m-auto">
          <form onSubmit={onSubmit}>
            <div className="grid gap-5">
            <h2 className='font-bold text-3xl m-auto'>Créer mon compte <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">d'investisseur</span></h2>
              <div className="grid gap-1">
              <Label htmlFor="pseudo">Pseudo</Label>
              <Input
                id="pseudo"
                placeholder="Entrez votre pseudo"
                type="text"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="relative grid gap-1">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                placeholder="Entrez votre mot de passe"
                type={showPassword ? 'text' : 'password'}
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect="off"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
              >
                {showPassword ? <AiOutlineEyeInvisible className="h-5 w-5 mt-5 text-black" /> : <AiOutlineEye className="h-5 w-5 text-black mt-5" />}
              </button>
            </div>
              <Button disabled={isLoading}>
                {isLoading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Suivant
              </Button>
            </div>
          </form>
          <Link href="/mot-de-passe-oublie" className="text-blue-500 underline m-auto text-sm">Mot de passe oublié ?</Link>
        </div>
         )}
         {showSecondForm && !showThirdForm && (
             <div className="grid gap-6 lg:w-[500px] m-auto">
                    <h2 className='font-bold text-3xl m-auto'>Combien de portefeuille souhaitez-vous créer ? </h2>
                    {/* Deuxième formulaire avec 4 boutons numérotés */}
                    <div className="grid gap-4 grid-cols-4">
                        {[1, 2, 3, 4].map((number) => (
                             <Button variant="secondary" className={selectedButton === number ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''} key={number} onClick={() => {
                                    setNumberOfInputsToShow(number); 
                                    setSelectedButton(number); 
                            }}>
                                {number}
                            </Button>
                        ))}
                    </div>
                    <Button onClick={handleSecondFormSubmit} disabled={isLoading}>
                        {isLoading && (
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Suivant
                    </Button>
                    {/* Lien vers le formulaire précédent */}
                    <Link href="/" className="text-blue-500 underline m-auto text-sm">Retour au formulaire précédent</Link>
                </div>
            )}
            {showThirdForm && (
                <div className="grid gap-6 lg:w-[500px] m-auto">
                    {/* Troisième formulaire ou contenu */}
                    <h2 className='font-bold text-3xl m-auto'>Pour finir, créez vos portefeuilles ! </h2>
                    {/* Vos éléments de formulaire ou contenu supplémentaire ici */}
                    <div className="grid gap-1">
                    {[...Array(numberOfInputsToShow)].map((_, index) => (
                                <div key={index}>
                                    <Label htmlFor={`input-${index}`}>Portefeuille {index + 1}</Label>
                                    <div className='grid grid-cols-2'>
                                    <Input
                                        id={`input-${index}`}
                                        placeholder={'Entrez le nom'}
                                        type="text"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                    />
                                    <Button type="submit">Créer le portefeuille</Button>
                                    </div>
                        </div>
                    ))}
                </div>
                <Button onClick={handleSecondFormSubmit} disabled={isLoading}>
                        {isLoading && (
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Accèder mes portefeuilles
                    </Button>
                    <Link href="/" className="text-blue-500 underline m-auto text-sm">Retour au formulaire précédent</Link>
                </div>
            )}
        </div>
      )
}

export default OwnerSignUpForm