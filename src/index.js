import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { S1 } from "./clientShop/S";
import reportWebVitals from "./reportWebVitals";
import ShopList  from "./ShopList/ShopList.js";


// App is the root component of our app.
// React application is formed by a tree of React components. (github copilot)
//To use react router, we need to wrap our app in a BrowserRouter component
//We also need to install react-router-dom package
//We created Routes component to wrap our routes
//We created two routes, one for login form and one for student list
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<ShopList/>}/>
        <Route path="/Shop" element={<S1/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
