import React,{useContext} from "react";
import CartContext from "../../Store/Cart-context";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
export default function MealItem(props) {
  const ctx = useContext(CartContext)
  const onAddToCart=(amount)=>{
      ctx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price,
        id:props.id
      })
  }
  return (
    <div className="main-div">
      <div className="mealItem">
        <h3>{props.name}</h3>
        <h6>{props.description}</h6>
        <h2>${props.price}</h2>
      </div>
      <div className="meal-item-form">
        <MealItemForm addToCartHandler={onAddToCart}/>
      </div>
    </div>
  );
}
