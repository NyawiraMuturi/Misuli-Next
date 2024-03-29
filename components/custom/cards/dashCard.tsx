import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import { activityData } from '@/lib/data'
import Image from 'next/image'

export default function DashCard() {
  return (
    <div className='flex gap-x-4'>
    {activityData.map((item, index)=>(
        <Card key={index} className='w-full bg-white p-0'>
            <CardHeader className='flex flex-row items-center justify-between'>
                <p>{item.heading}</p>
                <div>
                    <Image src={item.icon} width={20} height={30} alt='icon'/>
                </div>
            </CardHeader>
            <CardContent>
                <div className='w-full flex items-center justify-center'>
                <Image src={item.cardimg} width={100} height={50} alt='img' />
                </div>
            </CardContent>

            <CardFooter>

            </CardFooter>
        </Card>
    ))
    }
    </div>


  )
}
