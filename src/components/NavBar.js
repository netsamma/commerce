import React, { useContext, useState } from "react";
import {FaFacebookF, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import CartIcon from "./CartIcon";

function Navbar(props) {
  const { success, currentUser, logout } = useContext(AuthContext);
  const [verticalMenu, setVerticalMenu] = useState(false);

  const handleFilter = (filter) => {
    if (filter.length > 2) {
      props.setFilter(filter);
    } else if (filter.length === 2) {
      props.setFilter("");
    }
  };

  return (
    <Nav>
      <Link to="/"><FaFacebookF to="/" color="white" size="1.8em" /></Link>
      <NavLink to="/dashboard"> Dashboard </NavLink>
      <NavSearch
        //onChange={(e) => {e.target.value.length>2?props.setFilter(e.target.value):props.setFilter("")}}
        onChange={(e) => handleFilter(e.target.value)}
        placeholder="Ricerca prodotto"
        type="search"
      ></NavSearch>
      <NavFaSearch color="white" size="1.8em" />
      {success ? (
        <NavLink to="" onClick={logout}>
          Logout <br />
          <span style={{ color: "red" }}>{currentUser}</span>
        </NavLink>
      ) : (
        <NavLink to="/login">Login </NavLink>
      )}
      <NavCart to="/cart">
        <CartIcon numbOfCartItems={props.numbOfCartItems} />
      </NavCart>
      <HambMenu onClick={()=>setVerticalMenu((curr) => !curr)}>
        {verticalMenu?<>&#10005;</>:<>&#8801;</>}
      </HambMenu>
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
`;

const NavLink = styled(Link)`
  color: azure;
  margin: 0 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: #fac136;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavSearch = styled.input`
  height: 50%;
  flex: 1;
  margin: 0 20px;
  padding: 10px;
  font-size: 1.2em;
`;

const NavCart = styled(Link)`
  margin: 0 20px;
`;
const NavFaSearch = styled(FaSearch)`
  margin: 0 20px;
`;

const HambMenu = styled.button`
  margin: 0 20px;
  font-size: 1.8em;
  background-color: black;
  color: white;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
