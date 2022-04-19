import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
export default function MealItem(props) {
  return (
    <div className="main-div">
      <div className="mealItem">
        <h3>{props.name}</h3>
        <h6>{props.description}</h6>
        <h2>${props.price}</h2>
      </div>
      <div className="meal-item-form">
        <MealItemForm />
      </div>
    </div>
  );
}
