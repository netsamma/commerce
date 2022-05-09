import React from 'react'
import Navbar from '../components/NavBar'
import Products from '../components/Products';
import Cart from '../components/Cart';
import useProducts from '../hooks/useProducts';

function Home(props) {
	const {products, setFilter, loading} = useProducts()
	
	return (
		<>
			<Navbar numbOfCartItems={props.numbOfCartItems} setFilter={setFilter}/>
			<div className="main">
				<Products products={products} loading={loading} onAdd={props.onAdd}/>
				<Cart cartItems={props.cartItems} onAdd={props.onAdd} onRemove={props.onRemove}/>
			</div>
		</>
	)
}

export default Home