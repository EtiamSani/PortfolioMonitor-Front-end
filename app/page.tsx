import UsersLoginForm from '@/components/usersLogin/UsersLoginForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* https://bg.ibelick.com/ */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <UsersLoginForm/>
      </div>
    </main>
  )
}
