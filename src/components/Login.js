import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Login() {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [auth, setAuth] = useState({});
  
  // Spostare in AuthContext
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserName("");
    setPassword("");
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        JSON.stringify({ username, password })
      );
      let token = response.data.token;
      let roles = response.data.roles;
      let success = true
      setAuth({ username, password, roles, token, success });
    } catch (error) {
      if (!error?.response) {
        setErrorMsg("No server response");
      } else if (error.response?.status === 400) {
        setErrorMsg("Username or Password mancante");
      } else if (error.response?.status === 401) {
        setErrorMsg("Utente non autorizzato");
      } else {
        setErrorMsg("Login fallito");
      }
      errRef.current.focus();
    }
  };

  function setErrorMsg(msg) {}

  useEffect(() => {
    userRef.current.focus();
    console.log(auth)
  }, [auth]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  return (
    <div className="login-wrapper">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg}
      </p>
      <h1>Accedi</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button>Login</button>
        <p>
          <a href="/signup">Registrati</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
