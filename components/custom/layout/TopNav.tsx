import { Input } from '@/components/ui/input'
import React from 'react'

export default function TopNav() {
  return (
    <div className='text-white flex w-1/3 items-center gap-x-6  bg-gray-100 rounded-full py-2 px-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-none '>
    <p className='font-bold'>MISULI</p>
    <Input placeholder='Search' className=''/>
    </div>
  )
}
