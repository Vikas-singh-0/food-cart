import React, { useReducer } from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {};
  const defautlCartState = {
    items: [],
    totalAmount: 0,
  };
  const cartReducer = (state, action) => {
    console.log("this is state:",state);
    console.log("this is action:",action);
    if (action.type === "ADD") {
      const updatedamount =
        state.totalAmount + action.item.price * action.item.amount;
      let existingItemIndex = state.items.findIndex(item=>item.id===action.item.id)
      console.log("the index is ",existingItemIndex);
      const existingCartItem = state.items[existingItemIndex];
      let updatedItem;
      let updatedItems;
      if(existingCartItem){
        updatedItem = {
          ...existingCartItem,
          amount:existingCartItem.amount+action.item.amount
        }
        updatedItems=[...state.items];
        updatedItems[existingItemIndex]=updatedItem
      }else{
        updatedItems = state.items.concat(action.item);
      }

      
      return { items: updatedItems, totalAmount: updatedamount };
    }
    return defautlCartState;
  };
  const [cartState, dispatch] = useReducer(cartReducer, defautlCartState);
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
