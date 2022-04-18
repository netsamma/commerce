import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { FaFacebookF, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import AuthContext from "../context/AuthContext";

function Navbar(props) {
  
  const {success, currentUser} = useContext(AuthContext)

  return (

      <IconContext.Provider value={{color:"white", size:"1.8em"}}>
        <div className="navbar">
          <FaFacebookF className="navbar-icon"/>
          <Link to="/" className="navbar-button">
            Home
          </Link>
          <Link to="/dashboard" className="navbar-button">
            Dashboard
          </Link>
          <input className="navbar-search" placeholder="Ricerca prodotto"></input>
          <FaSearch className="navbar-icon" />
          <Link to="/login" className="navbar-button">
            {success?"Logout":"Login"}<br/>
            <span style={{color: "red"}}>{currentUser}</span>
          </Link>
          <Link to="/cart" className="navbar-button">
            <CartIcon numbOfCartItems={props.numbOfCartItems} />
          </Link>
        </div>
      </IconContext.Provider>
  );
}

export default Navbar;
