import React from 'react'
import image from '../img/cart.jpg'

function CartIcon(props) {
  let  numbOfItems 
  if (props.cartItems.length !== 0){
    numbOfItems = props.cartItems
        .map(item => item.qty)
        .reduce((prev, next) => prev + next)
  }else{
    numbOfItems = false
  }

  return (
    <div className='navbar-button'>
      <span className={numbOfItems ? "badge-notify" : ""}>{numbOfItems}</span>
      <img className='cart-icon' src={image} alt="" />
    </div>
  )
}

export default CartIcon