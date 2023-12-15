"use client"
import React, { useEffect, useState } from 'react'
import { ReloadIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaWallet } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { useRouter } from 'next/navigation'
import LeftSectionPortfolioOwnerSignupPage from './LeftSectionPortfolioOwnerSignupPage'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'

const OwnerSignUpForm = () => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [showThirdForm, setShowThirdForm] = useState(false);

    const [numberOfInputsToShow, setNumberOfInputsToShow] = useState<number>(0);
    const [selectedButton, setSelectedButton] = useState<number>(0);

    const [portfolioNames, setPortfolioNames] = useState<Array<{ name: string; ownerId: string }>>([]);

      const [inputDisabledState, setInputDisabledState] = useState<boolean[]>(Array.from({ length: 4 }, () => false));
      const [portfolioCreating, setPortfolioCreating] = useState(false);
      //a sup ?
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

      const [loginButtonDisabled, setLoginButtonDisabled] = useState(true)
      
      // const handleInputChangeThirdForm = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      //   const { value } = e.target;
      //   const updatedNames = [...portfolioNames];
      //   updatedNames[index] = { ...updatedNames[index], name: value };
      //   setPortfolioNames(updatedNames);
      // };

  

// async function handleThirdFormSubmit(e: React.SyntheticEvent, index:any) {
//   console.log('3ieme forme et portfoioname', portfolioNames )
 
//     e.preventDefault();
 
//   setIsLoading(true);
  
//   const ownerId = localStorage.getItem('ownerId')
//   const portfoliosData = portfolioNames.map((portfolio) => ({
//     name: portfolio.name,
//     portfolioOwnerId: ownerId,
//   }));

//   try {
//     setPortfolioCreating(true);

//     await Promise.all(
//       portfoliosData.map(async (portfolio, index) => {
//         try {
//           await handleCreatPortfolio(portfolio);
//           // Une fois le portefeuille créé, désactiver le bouton correspondant
//           const updatedDisabledState = [...inputDisabledState];
//           updatedDisabledState[index] = true;
//           setInputDisabledState(updatedDisabledState);
  
//         } catch (error) {
//           console.error(`Failed to create portfolio ${index + 1}:`, error);
//         }
//       })
//     );

//     const updatedDisabledState = [...inputDisabledState];
//     updatedDisabledState[inputDisabledState.findIndex((disabled) => !disabled)] = true;
//     setInputDisabledState(updatedDisabledState);

//     setIsLoading(false);
//     setShowThirdForm(true);
//   } catch (error) {
//     console.error('Error creating portfolios:', error);
//     setIsLoading(false);
//   } finally {
//     setPortfolioCreating(false);
//   }
// }

// useEffect(() => {
//   const allPortfoliosCreated = inputDisabledState.every((disabled) => disabled);
//   console.log(allPortfoliosCreated)
//   if (allPortfoliosCreated) {
//     setLoginButtonDisabled(false);
//   }
// }, [inputDisabledState]);


  // const handleCreatPortfolio = async (data:any) => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     console.log('token for portoflio', token)

  //     if (!token) {
  //       throw new Error('No token found');
  //     }
  //     const response = await fetch('http://localhost:3001/portfolio', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleLogOnPortfolios = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    
    const token = localStorage.getItem('token');
    if(token){
      router.push('/my-portfolios');
    }
  }

    return (
        <div className='grid lg:grid-cols-2 justify-items-center mt-[300px] md:mt-[300px] sm:mt-[300px] lg:mt-0'>
            <LeftSectionPortfolioOwnerSignupPage/>
            {!showSecondForm && !showThirdForm && (
          <FirstForm showSecondForm={showSecondForm} setShowSecondForm={setShowSecondForm}/>
         )}
         {showSecondForm && !showThirdForm && (
            <SecondForm showThirdForm={showThirdForm} setShowThirdForm={setShowThirdForm} setNumberOfInputsToShow={setNumberOfInputsToShow} numberOfInputsToShow={numberOfInputsToShow} inputDisabledState={inputDisabledState} setInputDisabledState={setInputDisabledState}/>
            )}
            {showThirdForm && (
                // <div className="grid gap-6 lg:w-[500px] m-auto">
                //     {/* Troisième formulaire ou contenu */}
                //     <h2 className='font-bold text-3xl m-auto ml-2 lg:ml-2'>Pour finir, créez vos <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">portefeuilles</span></h2>
                //     {/* Vos éléments de formulaire ou contenu supplémentaire ici */}
                //     <div className="grid gap-1">
                //     {[...Array(numberOfInputsToShow)].map((_, index) => (
                //                 <div key={index}>
                //                     <Label className='ml-2 lg:ml-2' htmlFor={`input-${index}`}>Portefeuille {index + 1}</Label>
                //                     <div className='grid grid-cols-1 lg:grid-cols-2 p-2'>
                //                     <Input
                //                         id={`input-${index}`}
                //                         placeholder={'Entrez le nom'}
                //                         type="text"
                //                         autoCapitalize="none"
                //                         autoComplete="off"
                //                         autoCorrect="off"
                //                         name='name'
                //                         value={portfolioNames[index]?.name || ''}
                //                         disabled={isLoading || inputDisabledState[index]}
                //                         onChange={(e) => handleInputChangeThirdForm(e, index)}
                //                     />
                //                     {inputDisabledState[index] && (
                //                         <p className="text-green-500 ml-3">Portefeuille créé !</p> // Afficher le message une fois que le portefeuille est créé
                //                     )}

                //                     {!inputDisabledState[index] && (
                //                         <Button
                //                             className='mt-3 md:mt-3 lg:mt-0 lg:ml-3 bg-gradient-to-r from-blue-500 to-purple-500'
                //                             type="submit"
                //                             onClick={(e) => handleThirdFormSubmit(e, index)}
                //                             disabled={isLoading || portfolioCreating || submitButtonDisabled} // Désactiver le bouton lorsqu'il est en cours de chargement ou s'il a déjà été cliqué
                //                         >
                //                             {isLoading && portfolioCreating && (
                //                                 <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                //                             )}
                //                             {portfolioCreating ? 'Création en cours...' : 'Créer le portefeuille'}
                //                             <FaWallet className='ml-2' />
                //                         </Button>
                //                     )}
                //                     </div>
                //         </div>
                //     ))}
                // </div>
                // <Button  className='m-2' onClick={handleLogOnPortfolios} disabled={inputDisabledState.some(disabled => !disabled)}>
                //         {isLoading && (
                //             <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                //         )}
                //         Accèder à mes portefeuilles
                //         <LuLogIn className='ml-2 text-xl'/>
                //     </Button>
                //     <Link href="/" className="text-blue-500 underline m-auto text-sm">Retour au formulaire précédent</Link>
                // </div>
                <ThirdForm setShowThirdForm={setShowThirdForm } showThirdForm={showThirdForm} numberOfInputsToShow={numberOfInputsToShow} setNumberOfInputsToShow={setNumberOfInputsToShow} inputDisabledState={inputDisabledState} setInputDisabledState={setInputDisabledState}/>
            )}
        </div>
      )
}

export default OwnerSignUpForm