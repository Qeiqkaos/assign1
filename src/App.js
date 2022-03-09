import React, { useState } from "react";
import './App.css';
import { LoginForm } from "./LoginForm/LoginForm.js";
import { ShopList } from "./ShopList/ShopList";

export function App() {
  console.log("App rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="App">
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );

}
