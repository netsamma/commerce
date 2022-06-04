import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import { url } from "../config/url";

function Login() {
  const {
    currentUser,
    setCurrentUser,
    token,
    setToken,
    //roles,
    setRoles,
    handleLogin,
    username,
    password,
    errMsg,
    setErrMsg,
    setUsername,
    setPassword
  } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  return (
    <div className="login-wrapper">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg}
      </p>
      <h1>Accedi</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
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
          <a href="/register">Registrati</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

/* 
  Source
  https://www.youtube.com/watch?v=X3qyxo_UTR4
  https://github.com/gitdagray/react_login_form
*/
