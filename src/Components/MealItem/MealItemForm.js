import React from 'react'
import './MealItemForm.css'

export default function MealItemForm() {
  return (
    <>
            <h3>Amount</h3>
            <input type='number' min='1' max='10' step='1' default='1'/>
            <button>+ Add</button>
    </>
  )
}
