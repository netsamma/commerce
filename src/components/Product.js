import React from 'react'

function Product(props) {
	return (
		<div className= "product-card">
			<img className="product-image" src={props.product.image} alt="" />
			<h4 className="product-title">{props.product.title}</h4>
			<p className="product-price" > € {props.product.price}</p>
			<button className='product-button' onClick={() => props.onAdd(props.product)}>Aggiungi</button>
		</div>
	)
	            
}

export default Product