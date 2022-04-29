import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Sidebar = () => {
  return (
    <StyledSideBar>
      <StyledLink to="/"> Home </StyledLink>
      <StyledLink to="/login"> Login </StyledLink>
      <StyledLink to="/cart"> Carrello </StyledLink>
      <StyledLink to="/customer"> Clienti </StyledLink>
    </StyledSideBar>
  )
}

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