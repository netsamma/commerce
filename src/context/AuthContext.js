import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [roles, setRoles] = useState([]);
  const [loginPending, setLoginPending] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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
    currentUser,
    setCurrentUser,
    token,
    setToken,
    roles,
    setRoles,
    loginError,
    setLoginError,
    errorMsg,
    loginPending,
    setLoginPending,
    getUserDetails,
    logout
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
