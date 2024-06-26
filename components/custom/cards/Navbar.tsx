import React from 'react'

import { Button } from '@/components/ui/button'
import { SignUpButton, SignInButton } from "@clerk/nextjs";


export default function Navbar() {
  return (
    <div className=' py-4 px-6 flex justify-between items-center '>
        <div className='text-white'>
            <h1 className='font-black text-4xl' >MISULI</h1>
        </div>
        <div className='flex gap-x-4'>
          <SignInButton>
          <Button className='bg-white text-primary hover:text-white border border-primary'>LOGIN</Button> 
          </SignInButton>
            
            <SignUpButton>
            <Button>REGISTER</Button>
            </SignUpButton>
        </div>
    </div>
  )
}
