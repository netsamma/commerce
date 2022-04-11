import image from '../img/cart.jpg'

function CartIcon(props) {
  
  let  numbOfItems = props.cartItems.reduce(function(sum, current) {
    return sum + current.qty;
  }, 0)

  return (
    <div className='navbar-button'>
      <span className={numbOfItems !== 0 ? "badge-notify" : ""}>
        {props.numbOfCartItems !== 0 ? props.numbOfCartItems : ""}
      </span>
      <img className='cart-icon' src={image} alt="" />  
    </div>
  )
}

export default CartIcon