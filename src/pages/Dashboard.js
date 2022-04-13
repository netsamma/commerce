import React from 'react'
import Navbar from '../components/NavBar'

function Dashboard(props) {
  return (
	<div>
		<Navbar numbOfCartItems={props.numbOfCartItems}/>
		Dashboard
	</div>
  )
}

export default Dashboard