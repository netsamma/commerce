import React from 'react'


function Product(props) {
  return (
	<div className= "product-card">
		<img className="product-image" src={props.item.image}  />
		<h4 className="product-title">{props.item.title}</h4>
		<p className="product-price" > € {props.item.price}</p>
		<button className='product-button' onClick={() => props.onAdd(props.item)}>Aggiungi</button>
	</div>
  )

//  return(
	// 	{/* SPRING REST - Product */}
	// <div className= "product-card" key={props.item.product_id}>
	//   <h4 className="product-title">{props.item.name}</h4>
 	//   <p className="product-quantity"> {props.item.quantity_in_stock}</p>
 	//   <p className="product-price" > {props.item.unit_price}</p>
	//   <button className='product-button' onClick={() => props.onAdd(props.item)}>Aggiungi</button>
	// </div>
//   )
	            
}

export default Product