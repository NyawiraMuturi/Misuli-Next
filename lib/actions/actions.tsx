const apiKey = process.env.API_KEY || '';
const apiHost = 'exercisedb.p.rapidapi.com';


async function fetchData(url:string, options = {}) {
    const defaultOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    };

    const finalOptions = { ...defaultOptions, ...options };
    const response = await fetch(url, finalOptions);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}

export async function getExerciseById(id: string) {
    const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
    return await fetchData(url);
}

export async function getExercises() {
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
    return await fetchData(url);
}

export async function getBodyPart() {
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    return await fetchData(url);
}

export async function getBodyPartbyId(bodyPart: string) {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
    return await fetchData(url); 
}




