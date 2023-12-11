"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from '../ui/button'
  import { PiSignInBold } from 'react-icons/pi'


const UsersLoginForm = ({ className, ...props }:any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

    return (
        <div className='grid lg:grid-cols-2 justify-items-center mt-[300px]'>
            <div className='bg-black w-full hidden lg:block'>
                eee
            </div>

        <div className="grid gap-6 lg:w-[500px]">
            <h2 className='font-bold text-xl'>Créer mon compte</h2>
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Label className="" htmlFor="email">
                  Pseudo
                </Label>
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
              <div className="grid gap-1">
                <Label className="" htmlFor="email">
                  Email
                </Label>
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
              <div className="grid gap-1">
                <Label className="" htmlFor="email">
                  Mot de passe
                </Label>
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
              <Button disabled={isLoading}>
                {isLoading && (
                  <p>icon</p>
                )}
                Créer mon compte
              </Button>
            </div>
          </form>
        </div>
        </div>
      )
}

export default UsersLoginForm