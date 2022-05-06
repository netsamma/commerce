import { createContext, useState } from "react";
import axios from "axios";
import { url } from "../config/url";

const AuthContext = createContext(null);
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [success, setSuccess] = useState(false);
  const [loginPending, setLoginPending] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const login = async (username, password) => {
    setLoginPending(true);
    setSuccess(false);
    setLoginError(null);
    try {
      const response = await axios.post(
        url.authenticate,
        JSON.stringify({ username, password })
      );
      setSuccess(true);
      setCurrentUser(username);
      localStorage.setItem("token", response.data.token);
      const userDetails = await getUserDetails(response.data.token);
      console.log(userDetails);
    } catch (error) {
      console.log(error.response);
      if (error.response?.status === 404) {
        setErrorMsg("Api non raggiungibile");
      }
    }
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

  const logout = () => {
    setLoginPending(false);
    setSuccess(false);
    setCurrentUser(null);
    setLoginError(null);
    localStorage.removeItem("token");
  };

  let state = {
    success: success,
    currentUser: currentUser,
    loginError: loginError,
    errorMsg: errorMsg,
    loginPending: loginPending,
    login: login,
    logout: logout
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
