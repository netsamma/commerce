import React from 'react'
import image from '../img/cart.jpg'

function CartIcon(props) {

  let  numbOfItems = props.cartItems.reduce(function(sum, current) {
    return sum + current.qty;
  }, 0)

  return (
    <div className='navbar-button'>
      <span className={numbOfItems !== 0 ? "badge-notify" : ""}>
        {numbOfItems !== 0? numbOfItems:""}
      </span>
      <img className='cart-icon' src={image} alt="" />
    </div>
  )
}

export default CartIcon