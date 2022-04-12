import React from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/NavBar'

function Login() {
  return (
	<>
		<Navbar numbOfCartItems={0}/>
		<div className="main">
			<LoginForm/>
		</div>
	</>
  )
}

export default Login