import axios from "axios";
import { useEffect, useState } from "react";
import { url } from '../config/url.js';

const useOrders = () => {
	const [loading, setLoading] = useState(false);
	const [orders, setOrders] = useState([]);
	const [filter, setFilter] = useState(""); 
	
	useEffect(
		() => {
			const loadOrders = async () => {
				setLoading(true);
				const response = await axios.get(url.orders+filter);	
				if(response.status === 200){
				  setOrders(response.data);
				}  
				setLoading(false);
			}		
			loadProducts();
		}, [filter]
	)

	return {loading, orders, setFilter}
}

export default useOrders