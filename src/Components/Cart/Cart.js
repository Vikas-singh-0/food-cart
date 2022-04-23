import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import "./Cart.css";
import CartItem from "./CartItem";
export default function Cart(props) {
  const ctx = useContext(CartContext);
  // console.log("ctxupdated *****",ctx);
  const TA = `$${ctx.totalAmount.toFixed(2)}`;
  let CartItemRemoveHandler =(id)=>{}
  const CartItemAddHandler=(item)=>{}
  let CartBlock = ctx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        addItem={CartItemAddHandler.bind(item)}
        addRemove={CartItemRemoveHandler}
      />
    );
  });
  return (
    <Modal onClose={props.onClose} onOpen={"hello"}>
      <ul>{CartBlock}</ul>
      <div className="total-amount">
        <span>Total amount</span>
        <span>{TA}</span>
      </div>
      <div className="action-items">
        <button className="close-btn" onClick={props.onClose}>
          Close
        </button>
        <button className="order-btn">Order</button>
      </div>
    </Modal>
  );
}
