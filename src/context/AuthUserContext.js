import { createContext, useEffect, useState } from "react";
// import api from "./api";

const AuthUserContext = createContext(null)
export default AuthUserContext;

export const AuthUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authIsLoading, setAuthIsLoading] = useState(true);
  console.log(authIsLoading)

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    // const token = localStorage.getItem("token");
    setAuthIsLoading(true);
    const token="uiuuuyy78y7y7"
    if (token) {
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
    //       setAuthIsLoading(false);
      setCurrentUser("Ignazio")
    }
  };


  // const handleLogout = async () => {
  //   localStorage.removeItem("token");
  //   setCurrentUser(null);
  // };

  const stateValues = {
    currentUser,
    setCurrentUser,
    checkLogin,
    // setAuthIsLoading,
    // authIsLoading,
    // handleLogout,
  };

  return (
    <AuthUserContext.Provider value={stateValues}>
      {children}
    </AuthUserContext.Provider>
  );
};