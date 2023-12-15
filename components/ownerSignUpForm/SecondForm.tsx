import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const SecondForm = props => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedButton, setSelectedButton] = useState<number>(0);

    async function handleSecondFormSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);
    
        setTimeout(() => {
            setIsLoading(false);
            props.setShowThirdForm(true);
            props.setNumberOfInputsToShow(selectedButton); // Mettre à jour le nombre de formulaires à afficher
            props.setInputDisabledState(Array.from({ length: selectedButton }, () => false)); // Réinitialiser l'état de chaque portefeuille
        }, 1000);
    }
  return (
    <div className="grid gap-6 lg:w-[500px] m-auto">
                    <h2 className='font-bold text-3xl ml-2'>Combien de <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">portefeuille</span> souhaitez-vous créer ? </h2>
                    {/* Deuxième formulaire avec 4 boutons numérotés */}
                    <div className="grid gap-4 grid-cols-4 m-2">
                        {[1, 2, 3, 4].map((number) => (
                             <Button variant="secondary" className={selectedButton === number ? 'bg-gradient-to-r from-blue-500 to-purple-500' : ''} key={number} onClick={() => {
                                props.setNumberOfInputsToShow(number); 
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
  )
}

export default SecondForm