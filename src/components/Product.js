import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StarRating } from './StarRating'

function Product(props) {
	return (
		<StyledProduct inline={props.inline}>
			<Link to={`/product/${props.product.id}`}>
				<img className="product-image" src={props.product.image} alt="" />
				<h4 className="product-title">{props.product.title}</h4>
			</Link>
			<p className="product-price" > € {props.product.price}</p>
			<p className="product-description" >{props.product.description}</p>
			{props.inline ? "" : 
				<StarRating />}
			{props.inline ? 
				<>
					<button 
						className='product-button' 
						onClick={() => props.edit()}>Edit
					</button> 
					<button 
						className='product-button' 
						onClick={() => props.delete(props.product.id)}>Delete
					</button>
				</> 
				
				: 
				<button 
				 	className='product-button' 
				 	onClick={() => props.onAdd(props.product)}>Aggiungi
			 	</button>
			}
		</StyledProduct>
	)
	            
}

export default Product

const StyledProduct = styled.div`
	display: flex;
	flex-direction: ${props => props.inline ? "row" : "column"};
	gap: 10px;
  	padding: 20px;
  	margin: 10px;
	border-radius: 20px;
	background-color: var(--mainWhite);

	.product-image{
		width: ${props => props.inline ?  "60px" : "80%"};
	}
	
	.product-button{
		margin-top: auto;
		border: none;
		background-color:skyblue;
		padding: 20px;
		font-family: "Arial";
		font-size: 15px;
		cursor: pointer;
		border-radius: 10px;
		margin-left: ${props => props.inline ? "auto" : ""};
	}
`
