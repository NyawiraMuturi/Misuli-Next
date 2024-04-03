import React from 'react'


const apiKey = process.env.API_KEY || '';
const apiHost = 'exercisedb.p.rapidapi.com';


 async function getExercises (){
    let response = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
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

export default async function RecipeCard() {
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



  

  


