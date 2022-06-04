import { createContext, useState} from "react";
import axios from "axios";
import AuthService from "../services/authService";

const AuthContext = createContext(null);
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [roles, setRoles] = useState([]);
  const [loginPending, setLoginPending] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(username, password)
    .then((response) => {
      console.log("Context then: "+JSON.stringify(response))
      setCurrentUser(response.username)
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", currentUser);
    })
    .catch((error) => {
        console.log(error)
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
        setErrMsg("Api non raggiungibile");
      }
    }
  }

  let state = {
    currentUser,
    username,
    setUsername,
    password,
    setPassword,
    setCurrentUser,
    token,
    setToken,
    roles,
    setRoles,
    loginError,
    setLoginError,
    errMsg,
    setErrMsg,
    loginPending,
    setLoginPending,
    getUserDetails,
    logout,
    handleLogin
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
