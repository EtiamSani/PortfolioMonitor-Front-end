import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import inputFields from '../../utils/LabeledInputOwnerSignup'
import LabeledInput from './LabeledInput'
import { ReloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'

const FirstForm = props => {

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)
        handleSignUp(formData)
        setTimeout(() => {
          setIsLoading(false);
          if (!props.showSecondForm) {
            props.setShowSecondForm(true); 
        } else if (!showThirdForm) {
            setShowThirdForm(true); 
        }
        }, 1000)
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
            if(typeof ownerId !== 'undefined') {
              localStorage.setItem('ownerId', ownerId)
            }
          // Gérer la réponse du serveur, redirection, notifications, etc.
        } catch (error) {
          console.error('Sign-up failed:', error);
          // Gérer les erreurs, afficher des messages à l'utilisateur, etc.
        }
      };
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });

      const [isLoading, setIsLoading] = useState<boolean>(false)
   
    // const [showSecondForm, setShowSecondForm] = useState(false);
    const [showThirdForm, setShowThirdForm] = useState(false);

      const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (
    <div className="grid gap-6 lg:w-[500px] m-auto">
            <form onSubmit={onSubmit}>
              <div className="grid gap-5">
              <h2 className='font-bold text-3xl ml-2'>Créer mon compte <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">d'investisseur</span></h2>
                    {inputFields.map((field, index) => (
                <LabeledInput
                  key={index}
                  label={field.label}
                  id={field.id}
                  placeholder={field.placeholder}
                  type={field.type}
                  autoCapitalize={field.autoCapitalize}
                  autoComplete={field.autoComplete}
                  autoCorrect={field.autoCorrect}
                  disabled={isLoading}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              ))}
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
  )
}

export default FirstForm