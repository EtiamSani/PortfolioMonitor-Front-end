import Image from 'next/image'
import React from 'react'

const LeftSectionPortfolioOwnerSignupPage = () => {
  return (
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
  )
}

export default LeftSectionPortfolioOwnerSignupPage