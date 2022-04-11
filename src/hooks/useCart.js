import { useState } from 'react'

const useCart = () => {
	const [cartItems, setCartItems] = useState([
		{
			category: "men's clothing",
			description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
			id: 2,
			image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
			price: 22.3,
			qty: 1,
			rating: {rate: 4.1, count: 259},
			title: "Mens Casual Premium Slim Fit T-Shirts "
		}
	]);

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
