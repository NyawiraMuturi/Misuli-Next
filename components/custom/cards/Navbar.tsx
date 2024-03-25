import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function Navbar() {
  return (
    <div className=' p-4 flex justify-between items-center '>
        <div>
            MISULI
        </div>
        <div className='flex gap-x-4'>
            <Button className='bg-white text-primary hover:text-white border border-primary'>LOGIN</Button>
            <Button>REGISTER</Button>
        </div>
    </div>
  )
}
