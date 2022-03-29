import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export class Navbar extends Component {
  render() {
	return (
    <nav className="navbar">
      <Link to="/" className="navbar-button">
        Home
      </Link>
    </nav>
  );
  }
}

export default Navbar
