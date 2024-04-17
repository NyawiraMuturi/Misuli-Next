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
    const url = 'https://exercisedb.p.rapidapi.com/exercises';
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


export const heroCardData = [
    {
      icon:'/gym.png',
      heading: 'Hypertrophy training',
      description: 'Growth and strengthening',
      top: -35,
      left:20

    },

    {
      icon:'/shoe.png',
      heading: 'Morning cardio',
      description: 'Aerobics to lose weight',
      top: -20,
      left:25
      
    },
    
  ];

export const mobileCard =[
    {
      
      heading: 'Personal Trainers',
      text: 'Get yourself a personal trainer at an affordable fee.'
    },
    {
      
      heading: 'Meal Plans',
      text: 'Get a custom meal plan that fits your fitness goals.'
    },
    {
      
      heading: 'Custom Plans',
      text: 'We have plans for shedding weight, building muscle, and maintenance.'
    },
    {
      
      heading: 'Free Consultation',
      text: `Don't be shy. Ask questions and get answers at $free.99`
    }
  ]


export const activityData = [
  {
    heading: 'Calories',
    icon: '/fire.png',
    color: '',
    cardimg: '/frequency.png',
    stats:''
  },
  {
    heading: 'Heart Rate',
    icon: '/heart.png',
    color: '',
    cardimg: '/pulse.png',
    stats:''
  },
  {
    heading: 'Steps',
    icon: '/walk.png',
    color: '',
    cardimg: '/steps.png',
    stats:''
  },
  {
    heading: 'Sleep',
    icon: '/moon.png',
    color: '',
    cardimg: '/sleep.png',
    stats:''
  },
]