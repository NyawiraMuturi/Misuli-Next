import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';


export default function ExerciseCard({ data }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                data?.map((item: any) => (
                    <Suspense fallback={<p>Loading feed...</p>}>
                        <Link
                            href={`/dashboard/exercises/${item.id}`} passHref
                            key={item.id}
                            className="border bg-white shadow-md rounded-md space-y-4 p-2 flex flex-col hover:border-primary hover:border-2">
                            <p>{item.target}</p>
                            <p>{item.name}</p>

                            <div className='flex items-center justify-center'>
                                <Image 
                                src={item.gifUrl}
                                width={50} 
                                height={50} 
                                alt="exerciseImg" 
                                unoptimized
                                />
                            </div>
                        </Link>
                    </Suspense>
                ))
            }
        </div>
    )
}