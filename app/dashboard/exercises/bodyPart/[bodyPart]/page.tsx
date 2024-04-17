import ExerciseCard from '@/components/custom/cards/exerciseCard';
import Category from '@/components/custom/carousel/category';
import { getBodyPartbyId } from '@/lib/data'

export default async function page({
    params: {bodyPart},
  }: {
    params: {bodyPart: string}
  }) {

    const part = await getBodyPartbyId(bodyPart)

    if (!part) {
        return <div>Body part not found</div>;
      }
    
  return (
    <div>
        <Category/>
        <ExerciseCard data={part}/>
    </div>
    
  )
}