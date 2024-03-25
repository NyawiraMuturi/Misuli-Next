import React from 'react';
import Image from 'next/image';
import { Card, CardDescription } from '@/components/ui/card';

interface CardProps {
    heading: string;
    description: string;
    // imageSrc: string; 
}

const HeroCard: React.FC<CardProps> = ({ heading, description }) => {
    return (
        <Card>
            <div className='rounded-full'>
                <Image src='/shoe.png' height={20} width={20} alt='icon'/>
            </div>
            <div>
                <CardDescription>
                    <h1>{heading}</h1>
                    <p>{description}</p>
                </CardDescription>
            </div>
        </Card>
    );
}

export default HeroCard;

