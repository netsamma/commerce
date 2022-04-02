import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from './CartIcon'

function Navbar(props) {
  return (
    <div className='navbar'>
      <Link to="/" className="navbar-button">
        Home
      </Link>
      <Link to="/" className="navbar-button">
        <CartIcon cartItems={props.cartItems}/>
      </Link>
    </div>
  );
}


export default Navbar
