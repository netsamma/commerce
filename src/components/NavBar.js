import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from './CartIcon'


function Navbar(props) {
  console.log(props);
  return (
    <div className='navbar'>
      <Link to="/" className="navbar-button">
        Home
      </Link>
      <Link to="/" className="navbar-button">
        <CartIcon cartItems={props.cartItems} numbOfCartItems={props.numbOfCartItems}/>
      </Link>
    </div>
  );
}


export default Navbar

