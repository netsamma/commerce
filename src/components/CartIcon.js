import image from '../img/cart.jpg'

function CartIcon(props) {
  console.log("CartIcon "+props.numbOfCartItems)
  return (
    <div className='navbar-button'>
      <span className={props.numbOfCartItems !== 0 ? "badge-notify" : ""}>
        {props.numbOfCartItems !== 0 ? props.numbOfCartItems : ""}
      </span>
      <img className='cart-icon' src={image} alt="" />  
    </div>
  )
}

export default CartIcon