import React, { useRef, useState } from 'react'

function LoginForm() {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const usernameRef = useRef()
	const passwordRef = useRef()

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
		  username,
		  password
		});
		// setToken(token);
	}
	
	return(
	  <div className="login-wrapper">
		<h1>Please Log In</h1>
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
			  <p>
				  <a href="#">Registrati</a>
			  </p>
		</form>
	  </div>
	)
  }
  
async function loginUser(credentials) {
	return fetch('http://localhost:8080/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	})
	  .then(data => data.json())
}


export default LoginForm