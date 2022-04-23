import React from 'react';
import { DUMMY_MEALS } from './DummyMeals';
import './Availablemeals.css'
import MealItem from '../MealItem/MealItem';
export default function AvailableMeals() {
        const availableMeals = DUMMY_MEALS.map(meal=>{
                return  <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
        })
  return (
    <div className='avialable-meals-box'>
            <ul>{availableMeals}</ul>
    </div>
  )
}
