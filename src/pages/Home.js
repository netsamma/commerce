import React from 'react'
import Navbar from '../components/NavBar'
import Products from '../components/Products';
import Cart from '../components/Cart';
import useProducts from '../hooks/useProducts';

function Home(props) {
	const {products, loading} = useProducts()
	
	return (
		<>
			<Navbar numbOfCartItems={props.numbOfCartItems}/>
			<div className="main">
				<div className="products-wrapper">
					<Products products={products} loading={loading} onAdd={props.onAdd}/>
				</div>
				<div className="cart-wrapper">
					<Cart cartItems={props.cartItems} onAdd={props.onAdd} onRemove={props.onRemove}/>
				</div>			
			</div>
		</>
	)
}

export default Home