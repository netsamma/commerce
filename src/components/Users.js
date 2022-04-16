import React, { useState } from 'react'
import api from '../api/api'

function Users() {
	const [users, setUsers] = useState([])

	React.useEffect(() => {
		getUsers();
	}, []);

	const getUsers =  () => {
		api.get(`users/`).then((response) => {
				setUsers(response.data)
				// console.log(response);
			})
			.catch((error) => {
				console.log(error);
		})
	}
  return (
	<div>
		{users.map((user)=>{
			return <h3 key={user.id}>{user.name}</h3>
		})}
	</div>
  )
}

export default Users