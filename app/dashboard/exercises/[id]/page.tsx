const apiKey = process.env.API_KEY || '';
const apiHost = 'exercisedb.p.rapidapi.com';


async function getById(id) {
    let response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }, 
        next: { revalidate: 3600 }
    })
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json()
}


export default function exerciseItem({
    params: {id}
}:{
    params: { id: string }}) {
    
  return (
    <div>page</div>
  )
}
