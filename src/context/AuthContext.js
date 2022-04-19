import { createContext, useContext, useState } from "react";
// import api from "./api";

const AuthContext = createContext(null)
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authIsLoading, setAuthIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState("Ignazio")
  const [token, setToken] = useState()
  const [success, setSuccess] = useState(true)
  // const {handleLogin} =  useContext(AuthContext);

  const handleLogin = async () => {
    // const token = localStorage.getItem("token");
    setToken("uiuuuyy78y7y7");
    setSuccess(true)
    setAuthIsLoading(true);
    // setSuccess(true);
    //       api
    //         .get(`users/${token}`)
    //         .then((response: { data: { user: UserType } }) => {
    //           console.log("CURRENT USER RES", response.data.user);
    //           setCurrentUser(response.data.user);
    //           setAuthIsLoading(false);
    //         })
    //         .catch((_error) => {
    //           setCurrentUser(null);
    //           setAuthIsLoading(false);
    //         });
    //     } else {
    //       setCurrentUser(null);
    setAuthIsLoading(false);
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setSuccess(false)
  };

  let state = {
    token: token,
    success: success,
    currentUser: currentUser,
    authIsLoading: authIsLoading,
    handleLogin: handleLogin,
    handleLogout: handleLogout
  }

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
};
