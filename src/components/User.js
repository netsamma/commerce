
import React from 'react'

function User(props) {
  return (
	<div className= "product-card" key={props.id}>
		<h4 className="product-title">{props.name}</h4>
		<p className="product-quantity"> {props.username}</p>
		<p className="product-price" > {props.email}</p>
	</div>
  )
}

export default User
