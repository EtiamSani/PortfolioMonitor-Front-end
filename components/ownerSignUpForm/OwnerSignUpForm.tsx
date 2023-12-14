"use client"
import React, { useEffect, useState } from 'react'
import { ReloadIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaWallet } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import Image from 'next/image'
import { jwtDecode } from "jwt-decode";

const OwnerSignUpForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [showThirdForm, setShowThirdForm] = useState(false);

    const [numberOfInputsToShow, setNumberOfInputsToShow] = useState<number>(0);
    const [selectedButton, setSelectedButton] = useState<number>(0);


      const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });

      const [portfolioNames, setPortfolioNames] = useState<Array<{ name: string; ownerId: string }>>([]);

      const [inputDisabledState, setInputDisabledState] = useState<boolean[]>(Array.from({ length: 4 }, () => false));
      const [portfolioCreating, setPortfolioCreating] = useState(false);
      //a sup ?
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

      const [loginButtonDisabled, setLoginButtonDisabled] = useState(true)
      

      const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleInputChangeThirdForm = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        const updatedNames = [...portfolioNames];
        updatedNames[index] = { ...updatedNames[index], name: value };
        setPortfolioNames(updatedNames);
      };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    handleSignUp(formData)
    setTimeout(() => {
      setIsLoading(false);
      if (!showSecondForm) {
        setShowSecondForm(true); 
    } else if (!showThirdForm) {
        setShowThirdForm(true); 
    }
    }, 1000)
  }

  async function handleSecondFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setTimeout(() => {
        setIsLoading(false);
        setShowThirdForm(true);
    }, 1000);
}

async function handleThirdFormSubmit(event: React.SyntheticEvent) {
  console.log('3ieme forme et portfoioname', portfolioNames )
  event.preventDefault();
  setIsLoading(true);
  
  const ownerId = localStorage.getItem('ownerId')
  const portfoliosData = portfolioNames.map((portfolio) => ({
    name: portfolio.name,
    portfolioOwnerId: ownerId,
  }));

  try {
    setPortfolioCreating(true);

    await Promise.all(
      portfoliosData.map(async (portfolio, index) => {
        try {
          await handleCreatPortfolio(portfolio);
          // Une fois le portefeuille créé, désactiver le bouton correspondant
          const updatedDisabledState = [...inputDisabledState];
          updatedDisabledState[index] = true;
          setInputDisabledState(updatedDisabledState);
  
        } catch (error) {
          console.error(`Failed to create portfolio ${index + 1}:`, error);
        }
      })
    );

    const updatedDisabledState = [...inputDisabledState];
    updatedDisabledState[inputDisabledState.findIndex((disabled) => !disabled)] = true;
    setInputDisabledState(updatedDisabledState);

    setIsLoading(false);
    setShowThirdForm(true);
  } catch (error) {
    console.error('Error creating portfolios:', error);
    setIsLoading(false);
  } finally {
    setPortfolioCreating(false);
  }
}

const handleSignUp = async (data: any) => {
  console.log(data)
  try {
    const response = await fetch('http://localhost:3001/auth-portfolio-owner/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Sign-up request failed');
    }

    const responseData = await response.json();
    console.log(responseData)
    const signupToken = responseData.access_token
    console.log('siguptoken', signupToken)

    localStorage.setItem('token', signupToken)
    const decodedToken = jwtDecode(responseData.access_token);
      console.log('Decoded Token:', decodedToken);
      const ownerId = decodedToken.sub
      console.log('ownerid', ownerId)
      localStorage.setItem('ownerId', ownerId)
    // Gérer la réponse du serveur, redirection, notifications, etc.
  } catch (error) {
    console.error('Sign-up failed:', error);
    // Gérer les erreurs, afficher des messages à l'utilisateur, etc.
  }
};

useEffect(() => {
  const allPortfoliosCreated = inputDisabledState.every((disabled) => disabled);
  console.log(allPortfoliosCreated)
  if (allPortfoliosCreated) {
    setLoginButtonDisabled(false);
  }
}, [inputDisabledState]);


  const handleCreatPortfolio = async (data:any) => {
    try {
      const token = localStorage.getItem('token');
      console.log('token for portoflio', token)

      if (!token) {
        throw new Error('No token found');
      }
      const response = await fetch('http://localhost:3001/portfolio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });
    } catch (error) {
      console.log(error)
    }
  }

    return (
        <div className='grid lg:grid-cols-2 justify-items-center mt-[300px] md:mt-[300px] sm:mt-[300px] lg:mt-0'>
            <div className='bg-black w-full hidden lg:block lg:h-screen'>
              <div className="relative h-full w-full bg-black">
                <div className="absolute  bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
              <h1 className='text-white grid justify-items-center text-7xl font-bold text-center '><span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">EIP </span> Portfolio</h1>
                <div>
                </div>
                  <Image
                    src='/images/signup-illustration-owner-black.png'
                    alt='product preview'
                    width={550}
                    height={550}
                    quality={100}
                    className='rounded-xl m-auto ring-1 mt-12'
                  />
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
            <h2 className='font-bold text-3xl ml-2'>Créer mon compte <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">d'investisseur</span></h2>
              <div className="grid gap-1 mx-2">
              <Label htmlFor="pseudo">Pseudo</Label>
              <Input
                id="username"
                placeholder="Entrez votre pseudo"
                type="text"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                disabled={isLoading}
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-1 mx-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative grid gap-1 mx-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                placeholder="Entrez votre mot de passe"
                type={showPassword ? 'text' : 'password'}
                autoCapitalize="none"
                autoComplete="new-password"
                autoCorrect="off"
                disabled={isLoading}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none "
              >
                {showPassword ? <AiOutlineEyeInvisible className="h-5 w-5 mt-5 text-black" /> : <AiOutlineEye className="h-5 w-5 text-black mt-5" />}
              </button>
            </div>
              <Button className='mx-2'disabled={isLoading}>
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
                    <h2 className='font-bold text-3xl ml-2'>Combien de <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">portefeuille</span> souhaitez-vous créer ? </h2>
                    {/* Deuxième formulaire avec 4 boutons numérotés */}
                    <div className="grid gap-4 grid-cols-4 m-2">
                        {[1, 2, 3, 4].map((number) => (
                             <Button variant="secondary" className={selectedButton === number ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''} key={number} onClick={() => {
                                    setNumberOfInputsToShow(number); 
                                    setSelectedButton(number); 
                            }}>
                                {number}
                            </Button>
                        ))}
                    </div>
                    <Button className='mx-2' onClick={handleSecondFormSubmit} disabled={isLoading || selectedButton === 0}>
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
                    <h2 className='font-bold text-3xl m-auto ml-2 lg:ml-2'>Pour finir, créez vos <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">portefeuilles</span></h2>
                    {/* Vos éléments de formulaire ou contenu supplémentaire ici */}
                    <div className="grid gap-1">
                    {[...Array(numberOfInputsToShow)].map((_, index) => (
                                <div key={index}>
                                    <Label className='ml-2 lg:ml-2' htmlFor={`input-${index}`}>Portefeuille {index + 1}</Label>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 p-2'>
                                    <Input
                                        id={`input-${index}`}
                                        placeholder={'Entrez le nom'}
                                        type="text"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        name='name'
                                        value={portfolioNames[index]?.name || ''}
                                        disabled={isLoading || inputDisabledState[index]}
                                        onChange={(e) => handleInputChangeThirdForm(e, index)}
                                    />
                                    {inputDisabledState[index] && (
                                        <p className="text-green-500 ml-3">Portefeuille créé !</p> // Afficher le message une fois que le portefeuille est créé
                                    )}

                                    {!inputDisabledState[index] && (
                                        <Button
                                            className='mt-3 md:mt-3 lg:mt-0 lg:ml-3 bg-gradient-to-r from-blue-500 to-purple-500'
                                            type="submit"
                                            onClick={handleThirdFormSubmit}
                                            disabled={isLoading || portfolioCreating || submitButtonDisabled} // Désactiver le bouton lorsqu'il est en cours de chargement ou s'il a déjà été cliqué
                                        >
                                            {isLoading && portfolioCreating && (
                                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            )}
                                            {portfolioCreating ? 'Création en cours...' : 'Créer le portefeuille'}
                                            <FaWallet className='ml-2' />
                                        </Button>
                                    )}
                                    </div>
                        </div>
                    ))}
                </div>
                <Button  className='m-2' onClick={handleThirdFormSubmit} disabled={loginButtonDisabled}>
                        {isLoading && (
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Accèder à mes portefeuilles
                        <LuLogIn className='ml-2 text-xl'/>
                    </Button>
                    <Link href="/" className="text-blue-500 underline m-auto text-sm">Retour au formulaire précédent</Link>
                </div>
            )}
        </div>
      )
}

export default OwnerSignUpForm