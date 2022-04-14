import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function LoginForm() {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const [success, setSuccess] = useState(false);
	const usernameRef = useRef()
	const passwordRef = useRef()

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:8080/login',
				JSON.stringify({username, password})
			)
			setSuccess(true);
			// setToken(token);
			console.log(response.data.token);
		} catch (error) {
			
		}
		
	}

	useEffect(() => {
		usernameRef.current.focus()
	},[])
	
	return(
	  <div className="login-wrapper">
		<h1>Accedi</h1>
		<form onSubmit={handleSubmit}>
		  	<label htmlFor='username'>Username</label>
			<input 
				type="text" 
				ref={usernameRef}
				autoComplete="off"
				onChange={e => setUserName(e.target.value)}
				value={username}
				required
			/>
		  	<label htmlFor='password'>Password</label>
			<input 
				type="password" 
				ref={passwordRef}
				onChange={e => setPassword(e.target.value)}
				value={password}
				required
			/>
		  	<button>Login</button>
			<p><a href="/signup">Registrati</a></p>
		</form>
	  </div>
	)
  }
  

export default LoginForm