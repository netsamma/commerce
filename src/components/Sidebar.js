import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <StyledSideBar>
      <StyledLink to="/"> Home </StyledLink>
      <StyledLink to="/dashboard/users"> Utenti </StyledLink>
      <StyledLink to="/dashboard/products"> Prodotti </StyledLink>
      <StyledLink to="/dashboard/orders"> Ordini </StyledLink>
      <StyledLink to="/dashboard/customers"> Clienti </StyledLink>
    </StyledSideBar>
  )
}

export default Sidebar

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gainsboro;
  padding: 20px 80px;
`

const StyledLink = styled(Link)`
  margin: 15px 0;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: black;
`