import React,{useRef} from 'react'
import './MealItemForm.css'

export default function MealItemForm(props) {
  const amountInputRef = useRef()
  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber =+enteredAmount;
    if(enteredAmount.trim().length ===0||enteredAmountNumber<1 ||enteredAmountNumber>5){
      return ;
    }
    props.addToCartHandler(enteredAmountNumber)
  }
  return (
    <>
            <h3>Amount</h3>
            <input type='number' ref={amountInputRef} min='1' max='10' step='1' default='1'/>
            <button onClick={submitHandler}>+ Add</button>
    </>
  )
}
