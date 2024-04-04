

const apiKey = process.env.API_KEY || '';
const apiHost = 'exercisedb.p.rapidapi.com';


 async function getExercises (){
    let response = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10', {
        method: 'GET', 
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    })
    if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      return response.json()
}

export default async function ExerciseCard() {
    const data = await getExercises()
    console.log(data)



  return (
    <div className="grid grid-cols-3 gap-4">
        {
            data?.map((exercise: any)=>(
                <div key={exercise.id} className="border bg-white shadow-md rounded-md space-y-4 p-2 flex flex-col items-center">
                    <p>{exercise.target}</p>
                    <p>{exercise.name}</p>
                    <img src={exercise.gifUrl} height='30%' width='50%'  alt="exerciseImg"/>
                </div>
            ))
        }
    </div>
  )
}