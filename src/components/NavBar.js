import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CartIcon from './CartIcon';
import './NavBar.css'

export class Navbar extends Component {
  
  render() {
	return (
    <nav className="navbar">
      <Link to="/" className="navbar-button">
        Home
      </Link>
      <Link to="/" className="navbar-button">
        <CartIcon cartItems={this.props.cartItems}/>
      </Link>
    </nav>
  );
  }
}

export default Navbar
