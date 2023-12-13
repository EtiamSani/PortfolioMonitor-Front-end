import OwnerSignUpForm from '@/components/ownerSignUpForm/OwnerSignUpForm'
import React from 'react'

const page = () => {
  return (
    <main>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <OwnerSignUpForm/>
        </div>
    </main>
  )
}

export default page