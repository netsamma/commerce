import { createContext, useState } from "react";
import axios from "axios";
import { url } from "../config/url";

const AuthContext = createContext(null);
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loginPending, setLoginPending] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const login = (username, password) => {
    return axios
      .post(url.login, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("username", JSON.stringify(response.data.username));
          setCurrentUser(response.data.username)
        }
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setCurrentUser(null);
    setLoginError(null);
    //window.location.replace("http://162.19.65.77/");
  };
  
  const getUserDetails = async (token) => {
    try {
      const user_details = await axios.get(
        "http://localhost:8080/users/details",
        // "http://192.168.10.79:8080/users/details",
        {
          headers: {
             'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }  
      );
      if (user_details.status === 200) { // response - object, eg { status: 200, message: 'OK' }
        console.log('success stuff');
        return user_details;
      }
    } catch (error) {
      console.log(error.response);
      if (error.response?.status === 404) {
        setErrorMsg("Api non raggiungibile");
      }
    }
  }

  let state = {
    currentUser: currentUser,
    loginError: loginError,
    setLoginError: setLoginError,
    errorMsg: errorMsg,
    loginPending: loginPending,
    setLoginPending: setLoginPending,
    login: login,
    logout: logout,
    getUserDetails: getUserDetails
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
