// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import CartIcon from "./CartIcon";
// import { FaFacebookF, FaSearch } from "react-icons/fa";
// import { IconContext } from "react-icons";
// import AuthContext from "../context/AuthContext";

// function Navbar(props) {
  
//   const {success, currentUser, handleLogout} = useContext(AuthContext)

//   return (

//       <IconContext.Provider value={{color:"white", size:"1.8em"}}>
//         <div className="navbar">
//           <FaFacebookF className="navbar-icon"/>
//           <Link to="/" className="navbar-button">
//             Home
//           </Link>
//           <Link to="/dashboard" className="navbar-button">
//             Dashboard
//           </Link>
//           <input className="navbar-search" placeholder="Ricerca prodotto"></input>
//           <FaSearch className="navbar-icon" />

//           {success?
//             (<Link to='' className="navbar-button" onClick={handleLogout}>
//               Logout <br/>
//               <span style={{color: "red"}}>{currentUser}</span>
//               </Link>):
//             (<Link to='/login' className="navbar-button" >Login </Link>)
//           }

//           <Link to="/cart" className="navbar-button">
//             <CartIcon numbOfCartItems={props.numbOfCartItems} />
//           </Link>
//         </div>
//       </IconContext.Provider>
//   );
// }

// export default Navbar;


import React, { useContext } from "react";
import { FaBars, FaFacebookF, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import CartIcon from "./CartIcon";


function Navbar(props) {
  
  const {success, currentUser, handleLogout} = useContext(AuthContext)

  return (
      <Nav>
        <FaFacebookF color="white" size="1.8em"/>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/dashboard"> Dashboard </NavLink>
        <NavSearch 
          onChange={(e) => props.getProduct(e.target.value)} 
          placeholder="Ricerca prodotto">
        </NavSearch>
        <NavFaSearch color="white" size="1.8em"/>
        <NavLink to='/login'>Login </NavLink>
        {success?
          (<NavLink to='' onClick={handleLogout}> 
            Logout <br/>
            <span style={{color: "red"}}>{currentUser}</span>
            </NavLink>):
          (<NavLink to='/login'>Login </NavLink>)
        }
        <NavCart to="/cart">
          <CartIcon numbOfCartItems={props.numbOfCartItems} />
        </NavCart>
        <NavHambBars/>
      </Nav>
  );
}

export default Navbar;


const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  color: azure;
  margin: 0 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: #fac136;
  }
  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavSearch = styled.input`
  height: 50%;
  flex: 1;
  margin: 0 20px;
  padding: 10px;
  font-size: 1.2em;
`

const NavCart = styled(Link)`
  margin: 0 20px;
`
const NavFaSearch = styled(FaSearch)`
  margin: 0 20px;
`

const NavHambBars = styled(FaBars)`
  color: white;
  font-size: 1.5em;
  margin: 0 20px;
  @media screen and (min-width: 768px){
    display: none;
  }
`
