import UsersSignUpForm from '@/components/usersSignup/UsersSignUpForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* https://bg.ibelick.com/ */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <UsersSignUpForm/>
      </div>
    </main>
  )
}
