import { getExercises } from '@/lib/actions/actions';
import Link from 'next/link';

export default async function ExerciseCard() {
    const data = await getExercises()

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                data?.map((exercise: any) => (
                        <Link
                            href={`/dashboard/exercises/${exercise.id}`} passHref
                            key={exercise.id}
                            className="border bg-white shadow-md rounded-md space-y-4 p-2 flex flex-col items-center">
                            <p>{exercise.target}</p>
                            <p>{exercise.name}</p>
                            <img src={exercise.gifUrl} width='50%' height='30%' alt="exerciseImg" />
                        </Link>


                ))
            }
        </div>
    )
}