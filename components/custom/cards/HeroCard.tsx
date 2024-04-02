import React from 'react';
import Image from 'next/image';
import { Card, CardDescription } from '@/components/ui/card';

interface CardProps {
    heading: string;
    description: string;
    icon: string; 
}

const HeroCard: React.FC<CardProps> = ({ heading, description, icon }) => {
    return (
        <Card>
            <div className='rounded-full'>
                <Image src={icon} height={20} width={20} alt='icon'/>
            </div>
            <div>
                <CardDescription>
                    {heading}
                    <br />
                    {description}
                </CardDescription>
            </div>
        </Card>
    );
}

export default HeroCard;

