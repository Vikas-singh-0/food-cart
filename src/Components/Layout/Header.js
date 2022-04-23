import React, { useContext } from "react";
import './Header.css'
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
 
  return (
    <>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShow}/>
      </header>
      <div className="main-image">
        <img 
          width="100%"
          src="https://media.istockphoto.com/photos/ketogenic-meal-laid-out-on-a-dining-table-with-the-hands-of-people-picture-id1026234194"
          alt="This is image for React cart"
        />
      </div>
    </>
  );
}
