import { getBodyPart } from "@/lib/actions/actions";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

export default async function Category() {
    const data = await getBodyPart()
    

    return (
        <Carousel className="text-white w-full">
            <CarouselContent className="-ml-1">
                {
                    data?.map((bodyPart: any) => (
                        <CarouselItem key={bodyPart.id} className="pl-1 md:basis-1/3 lg:basis-1/5">
                            <Link
                            href={`/dashboard/exercises/bodyPart/${bodyPart}`} passHref 
                            className="flex my-4 mx-2 items-center justify-center border rounded-lg">
                                <span className="text-xl font-bold">{bodyPart}</span>
                            </Link>
                        </CarouselItem>
                    ))
                }

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
