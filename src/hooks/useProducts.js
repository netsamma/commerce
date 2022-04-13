import axios from "axios";
import { useEffect, useState } from "react";
import { config } from '../config/config.js';

const useProducts = () => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(
		() => {
			loadProducts();
		}, []
	)

	
	const loadProducts = async () => {
		setLoading(true);
		// const response = await axios.get(config.productsSpringApiUrl);
		const response = await axios.get(config.productsFakeUrl);
		
		if(response.status === 200){
		  setProducts(response.data);
		}  
		setLoading(false);
	}

	

	return {loading, products}
}

export default useProducts