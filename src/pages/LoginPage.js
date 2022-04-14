import React from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/NavBar'

function LoginPage(props) {
  return (
	<>
		<Navbar numbOfCartItems={props.numbOfCartItems}/>
		<LoginForm/>

	</>
  )
}

export default LoginPage