import DashCard from '@/components/custom/cards/dashCard'
import RecipeCard from '@/components/custom/cards/recipeCard'
import React from 'react'

export default function page() {
  return (
    <div className='p-4 space-y-4 text-white'>
      <DashCard/>
      <p>Diet Plan</p>
      <RecipeCard/>
    </div>
  )
}  