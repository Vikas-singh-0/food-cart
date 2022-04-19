import React from 'react'
import CartIcon from './CartIcon'
import './HeaderCartButton.css'
export default function HeaderCartButton() {
  return (
    <div className='button bump' >
            <div style={{width:"33px",height:"33px"}}><CartIcon/></div>
            <span>My Cart</span>
            <div className='item-counter'>3</div>
    </div>
  )
}
