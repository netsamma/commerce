import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null)
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("")
  const [success, setSuccess] = useState(false)
  const [loginPending, setLoginPending] = useState(false)
  const [loginError, setLoginError] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const login = async (username, password) => {
	  setLoginPending(true);
	  setSuccess(false);
	  setLoginError(null);
	  try {
      const response = await axios.post(
        // "http://localhost:4000/login",
        "https://zeroper.herokuapp.com/login",
        JSON.stringify({ username, password })
      );
      setSuccess(true)
      setCurrentUser(username)
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error.response.status);
      if (error.response?.status === 404) {
        setErrorMsg("Api non raggiungibile");
      }  
      // if (!error?.response) {
      //   setErrorMsg("No server response");
      // } else if (error.response?.status === 400) {
      //   setErrorMsg("Username or Password mancante");
      // } else if (error.response?.status === 401) {
      //   setErrorMsg("Utente non autorizzato");
      // } else {
      //   setErrorMsg("Login fallito");
      // }
      // errRef.current.focus();
    }
	}

  const logout = () => {
	  setLoginPending(false);
	  setSuccess(false);
    setCurrentUser(null);
	  setLoginError(null);
    localStorage.removeItem("token");
	}


  let state = {
    success: success,
    currentUser: currentUser,
    loginError: loginError,
    errorMsg: errorMsg,
    loginPending: loginPending,
    login: login,
    logout: logout
  }

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
};
