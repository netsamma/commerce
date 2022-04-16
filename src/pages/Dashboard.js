import React from 'react'
import Navbar from '../components/NavBar'
import Users from '../components/Users'

function Dashboard(props) {
  return (
	<div>
		<Navbar numbOfCartItems={props.numbOfCartItems}/>
		Dashboard
		<Users/>
	</div>
  )
}

export default Dashboard