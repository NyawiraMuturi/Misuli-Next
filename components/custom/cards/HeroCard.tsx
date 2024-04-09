import React from 'react';
import Image from 'next/image';
import { Card, CardDescription } from '@/components/ui/card';

interface CardProps {
    heading: string;
    description: string;
    icon: string; 
    top: number;
    left:number;
}

const HeroCard: React.FC<CardProps> = ({ heading, description, icon, top, left }) => {
    const positionStyle = {
        top: `${top}rem`,
        left: `${left}rem`,
    };
    return (
        <Card 
        className='flex w-1/3 px-2 py-4 gap-x-4 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border-none absolute z-10'
        style={positionStyle} >
            <div 
            className='rounded-full bg-white rounded-full w-10 h-10 flex items-center justify-center bg-white-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
                <Image src={icon} height={20} width={20} alt='icon'/>
            </div>
            <div>
                <CardDescription>
                    <span className='text-white font-bold'>{heading}</span>
                    <span className='text-white font-thin text-xs'>{description}</span>
                </CardDescription>
            </div>
        </Card>
    );
}

export default HeroCard;

