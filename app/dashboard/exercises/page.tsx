import ExerciseCard from '@/components/custom/cards/exerciseCard'
import Category from '@/components/custom/carousel/category'
import { getExercises } from '@/lib/data'

export default async function Page() {
  const exercise = await getExercises()
  
  return (
    <div >
      <Category/>
      <ExerciseCard data={exercise}/>
    </div>
  )
}
