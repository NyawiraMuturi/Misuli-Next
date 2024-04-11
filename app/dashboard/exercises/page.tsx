import ExerciseCard from '@/components/custom/cards/exerciseCard'
import Category from '@/components/custom/carousel/category'
import { getExercises } from '@/lib/actions/actions'

export default async function Page() {
  const exercise = await getExercises()
  
  return (
    <div className='p-4'>
      <Category/>
      <ExerciseCard data={exercise}/>
    </div>
  )
}
