import React from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/NavBar'

function LoginPage() {
  return (
	<>
		<Navbar numbOfCartItems={0}/>
		<div className="main">
			<div className="login-form-wrapper">
				<LoginForm/>
			</div>
		</div>
	</>
  )
}

export default LoginPage