import React from 'react'
import Navbar from '../components/NavBar'
import Products from '../components/Products';
import Cart from '../components/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

function Home() {
	const {cartItems, numbOfCartItems, onAdd, onRemove} = useCart()
	const {products, loading} = useProducts()
	
	return (
		<>
			<Navbar numbOfCartItems={numbOfCartItems}/>
			<div className="main">
				<div className="products-wrapper">
					<Products products={products} loading={loading} onAdd={onAdd}/>
				</div>
				<div className="cart-wrapper">
					<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
				</div>			
			</div>
		</>
	)
}

export default Home