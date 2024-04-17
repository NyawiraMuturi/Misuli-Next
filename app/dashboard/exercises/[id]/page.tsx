import {getExerciseById} from "@/lib/data"

export default async function exerciseItem({
  params: { id },
}: {
  params: { id: string }
}) {
    
    const exercise = await getExerciseById(id)

    if (!exercise) {
      return <div>Exercise not found</div>;
    }
    
  return (
    <div 
    key={exercise.id}
    >
      {exercise.name}
    </div>
  )
}
