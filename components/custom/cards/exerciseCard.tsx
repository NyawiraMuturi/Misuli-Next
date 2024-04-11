
import Link from 'next/link';


export default async function ExerciseCard({data}) {
    // const data = await getExercises()

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                data?.map((item: any) => (
                        <Link
                            href={`/dashboard/exercises/${item.id}`} passHref
                            key={item.id}
                            className="border bg-white shadow-md rounded-md space-y-4 p-2 flex flex-col items-center">
                            <p>{item.target}</p>
                            <p>{item.name}</p>
                            <img src={item.gifUrl} width='50%' height='30%' alt="exerciseImg" />
                        </Link>


                ))
            }
        </div>
    )
}