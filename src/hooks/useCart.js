import { useState } from 'react'

const useCart = () => {
	const [cartItems, setCartItems] = useState([]);

	const onAdd = (product) => {
		console.log(product)
		const productInCart = cartItems.find((x) => x.id === product.id);
		if (productInCart) {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === product.id ? { ...productInCart, qty: productInCart.qty + 1 } : cartItem
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};
	
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
			cartItems.map((x) =>
				x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
			)
			);
		}
	}

	const numbOfCartItems = cartItems.reduce(function(sum, current) {
		return sum + current.qty;
	}, 0)
	
  	return {onAdd, onRemove, cartItems, numbOfCartItems, setCartItems}
  
}

export default useCart;
