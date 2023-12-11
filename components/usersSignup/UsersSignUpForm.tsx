"use client"
import React, { useState } from 'react'
import { ReloadIcon } from "@radix-ui/react-icons"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from '../ui/button'
import Link from 'next/link'



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
        <div className='grid lg:grid-cols-2 justify-items-center mt-[300px] md:mt-[300px] sm:mt-[300px] lg:mt-0'>
            <div className='bg-black w-full hidden lg:block lg:h-screen'>
              <div className="relative h-full w-full bg-black">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                  <h1 className='text-white grid justify-items-center text-7xl font-bold text-center mt-10'><span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">EIP </span> Portfolio</h1>
                </div>
                <div className="absolute left-0 right-0 bottom-12 text-center text-white">
                  <h2 className='text-3xl font-bold'>Suivez dès maintenant <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">tout</span> mes investissements <br/> PEA et CTO <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">en temps réel ! </span></h2>
                </div>
              <div className="absolute left-0 right-0 top-[-10%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
              </div>
              </div>
            </div>

        <div className="grid gap-6 lg:w-[500px] m-auto">
          <form onSubmit={onSubmit}>
            <div className="grid gap-5">
            <h2 className='font-bold text-3xl m-auto'>Créer mon compte</h2>
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
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Créer mon compte
              </Button>
            </div>
          </form>
          <Link href="/mot-de-passe-oublie" className="text-blue-500 underline m-auto text-sm">Mot de passe oublié ?</Link>
        </div>
        </div>
      )
}

export default UsersLoginForm