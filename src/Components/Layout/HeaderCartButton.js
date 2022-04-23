import React,{useContext} from 'react'
import CartIcon from './CartIcon'
import CartContext from '../../Store/Cart-context'

import './HeaderCartButton.css'
export default function HeaderCartButton(props) {
  const ctx=useContext(CartContext);
  // console.log("inside header cttx",ctx);
  const noOfCartItems = ctx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);
  return (
    <div className='button bump' onClick={props.onClick}>
            <div style={{width:"33px",height:"33px"}}><CartIcon/></div>
            <span>My Cart</span>
            <div className='item-counter'>{noOfCartItems}</div>
    </div>
  )
}
