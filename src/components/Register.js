import React from 'react'
import styled from 'styled-components'

export const Register = () => {
  return (
	<>
		<h1>Registrati</h1>
		{/* <form > onSubmit={handleSubmit} */}
		<Form >
			<label htmlFor="username">Username</label>
			<input
			type="text"
			//   ref={userRef}
			autoComplete="off"
			//   onChange={(e) => setUserName(e.target.value)}
			//   value={username}
			required
			/>		
			<label htmlFor="password">Password</label>
			<input
			type="password"
			//   onChange={(e) => setPassword(e.target.value)}
			//   value={password}
			required
			/>
			<label htmlFor="mail">Mail</label>
			<input
			type="text"
			//   ref={userRef}
			//   autoComplete="off"
			//   onChange={(e) => setUserName(e.target.value)}
			//   value={username}
			required
			/>
			<button>Registrati</button>
		</Form>
	</>
  )
}

const Form = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 50px;
`