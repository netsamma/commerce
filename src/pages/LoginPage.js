import React from 'react'
import Login from '../components/Login'
import Navbar from '../components/NavBar'

function LoginPage(props) {
  return (
	<>
		<Navbar numbOfCartItems={props.numbOfCartItems}/>
		<Login/>

	</>
  )
}

export default LoginPage