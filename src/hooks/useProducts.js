import axios from "axios";
import { useEffect, useState } from "react";
import { url } from '../config/url.js';

const useProducts = () => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [filter, setFilter] = useState("Pizza");

	useEffect(
		() => {
			const loadProducts = async () => {
				setLoading(true);
				const response = await axios.get(url.products+"?title="+filter);	
				if(response.status === 200){
				  setProducts(response.data);
				}  
				setLoading(false);
			}		
			loadProducts();
		}, [filter]
	)

	return {loading, products, setFilter}
}

export default useProducts