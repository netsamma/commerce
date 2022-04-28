import React from 'react'
import { Link } from 'react-router-dom'
import { StarRating } from './StarRating'

function Product(props) {
	return (
		<div className= "product-card">
			<Link to={`/product/${props.product.id}`}>
				<img className="product-image" src={props.product.image} alt="" />
				<h4 className="product-title">{props.product.title}</h4>
			</Link>
			<p className="product-price" > € {props.product.price}</p>
			<p className="product-description" >{props.product.description}</p>
			<StarRating />
			<button className='product-button' onClick={() => props.onAdd(props.product)}>Aggiungi</button>
		</div>
	)
	            
}

export default Product