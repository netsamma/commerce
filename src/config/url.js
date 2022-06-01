//const localhost = "http://162.19.65.77:8080";

const localhost = "http://localhost:4000";
const mock = 'https://625b0e12398f3bc782a9b2a0.mockapi.io/api';
// const vps = "http://162.19.65.77:8080";

const users_mock = mock + '/users';
// const orders_mock = mock + '/orders';
const products_mock = mock + '/products';
// const users_vps = vps + '/users';
// const login_vps = vps + '/authenticate';
const login_localhost = localhost + '/login';	

export const url = {  
	users: users_mock,
	products: products_mock,
	login: login_localhost
};




// productsByTitle: 'https://625b0e12398f3bc782a9b2a0.mockapi.io/api/products/?title=',
// productsByPrice: 'https://625b0e12398f3bc782a9b2a0.mockapi.io/api/products/?price=',
// productsSortByPrice: 'https://625b0e12398f3bc782a9b2a0.mockapi.io/api/products?sortBy=price',
// products: 'https://625b0e12398f3bc782a9b2a0.mockapi.io/api/products/',
// authenticate:   'http://localhost:8080/login',
// products: 'https://fakestoreapi.com/products/',
//authenticate: "https://zeroper.herokuapp.com/login",
// productsUrl: 'http://ignaziosammarco.altervista.org/api/products.json',
// productsUrl: 'http://192.168.10.79:8080/products',
// usersUrl: 'https://jsonplaceholder.typicode.com/users/',
// "http://192.168.10.79:8080/authenticate",
// { username, password }
// "http://localhost:4000/login",
// "https://zeroper.herokuapp.com/login",
//authenticate:   'http://localhost:4000/login',
//authenticate: "http://192.168.10.79:8080/authenticate",	
// url.authenticate,
// { username, password }
// "http://localhost:4000/login",
