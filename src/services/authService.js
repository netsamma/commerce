import axios from 'axios';
import {url} from '../config/url';

const AuthService = {
	// _url: process.env.REACT_APP_API_BASE_URL,
	_url: url.baseUrl,

	login(username, password) {
		return Promise.resolve().then(() => {
			// this._validateEmail(username);
			// this._validateStringField('password', password);
      return axios.post(
        `${this._url}/login`,
        {
          username,
          password,
        },
        {
          headers: { "Content-type": "application/json" },
          // withCredentials: true
        }
      )
      .then(response => {
          // console.log("[Axios Response]:", response.data);
          return response.data;
        }
      )
      .catch(error => {
        if (!error?.response) {
          throw new Error('No server response')
        }  
        else if (error.response?.status === 401) {
          throw new Error('Username o pwd errati')
        }else{
          throw new Error('Login fallito')
        }
      })
      
		});
	},
}

export default AuthService;


// const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       url.login,
  //       {
  //         username,
  //         password,
  //       },
  //       {
  //         headers: { "Content-type": "application/json" },
  //         // withCredentials: true
  //       }
  //     );
  //     setToken(response?.data?.token);
  //     setRoles(response?.data?.roles);
  //     setCurrentUser(username);
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("username", currentUser);
  //     navigate('/');
  //   } catch (error) {
  //     console.log(error);
  //     setErrMsg(error.response);
  //     if (!error?.response) {
  //       alert("No server response");
  //     } else if (error.response?.status === 400) {
  //       alert("Username or Password mancante");
  //     } else if (error.response?.status === 401) {
  //       alert("Username o password errati");
  //     } else {
  //       alert("Login fallito");
  //     }
  //   }
  // };

/* 
	Fonte: 
	https://github.com/mikelpmc/react-context-api-auth/blob/master/client/src/providers/authProvider.js 

  https://medium.com/@mike.maslyuk/error-handling-for-network-requests-in-client-side-javascript-applications-with-fetch-axios-bd2cddb3249c
  check network error promise
*/