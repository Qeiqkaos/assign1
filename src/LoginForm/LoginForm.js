import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//React uses virtual DOM to compare the new state of the DOM tree with the old state
//useNavigate is a hook that allows us to navigate to a new route
//useNavigate === useHistory
export const LoginForm = (setRole) => {
  console.log("Login form rendered");
  const user = {username: 'admin', password: 'admin'};
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    if (username === user.username && password === user.password) {
      navigate("./shop");
      setRole("admin");
    } else {
      navigate("./S");
      setRole("visitor");
    }
  };
  //useState is a hook (js function) that returns an array with two elements
  // (data and a function to update the data)

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
  //username = 'bobby' - WRONG
  return form;
};
