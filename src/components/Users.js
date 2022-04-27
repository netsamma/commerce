import axios from 'axios';
import React, { useState } from 'react'
import { url } from '../config/url';

function Users() {
	const [users, setUsers] = useState([])

	React.useEffect(() => {
		getUsers();
	}, []);
	
	const getUsers =  async () => {
		const response = await axios.get(url.users+"?name="+"");	
		if(response.status === 200){
		  setUsers(response.data);
		  console.log(response.data);
		}
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