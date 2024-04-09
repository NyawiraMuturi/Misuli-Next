
const apiKey = process.env.API_KEY || '';
const apiHost = 'exercisedb.p.rapidapi.com';


export default async function category() {
    const data = await getExercises()
    console.log(data)

  return (
    <div>
        {
            data?.map((bodyPart: any)=>(
                <div key={bodyPart.id}>
                    {bodyPart}
                </div>
            ))
        }
    </div>
  )
}
