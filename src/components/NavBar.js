import React from 'react'
import {Link} from 'react-router-dom'
import CartIcon from './CartIcon'


function Navbar(props) {
  return (
     <div className='navbar'>
      <Link to="/" className="navbar-button">
        Home
      </Link>
      <Link to="/login" className="navbar-button">
        Login
      </Link>
      <Link to="/cart" className="navbar-button">
        <CartIcon numbOfCartItems={props.numbOfCartItems}/>
      </Link>
    </div>
  );
}


export default Navbar

