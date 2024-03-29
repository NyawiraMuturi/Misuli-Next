'use client'
import { Calendar } from '@/components/ui/calendar'
import React from 'react'

export default function Rightbar() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div className='p-4'>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <p>lorem500</p>
        </div>
    )
}
