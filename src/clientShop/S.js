import React, {useState} from "react";
import "../ShopList/ShopList.css";
import {useNavigate} from "react-router-dom";

const shopList = [
  { id: "1", name: "Nike Air Zoom Terra Kiger 8", price: "$180", description: "Men's Trail Running Shoes", stock: "50" },
  { id: "2", name: "Nike Air Max 90 Air Max Month", price: "$190", description: "Men's Shoes", stock: "60" },
  { id: "3", name: "Nike Air Zoom SuperRep 3", price: "$160", description: "Men's HIIT Class Shoes", stock: "35" },
  { id: "4", name: "Nike Blazer Low Platform", price: "$125", description: "Women's Shoes", stock: "78" },
  { id: "5", name: "Nike Metcon 7", price: "$170", description: "Women's Training Shoes", stock: "20" },
];
export const S1 = () => {
  console.log('Shop list rendered');
  const navigate = useNavigate();
  const ShopList = shopList;
  return (
    <div className="shop-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {ShopList.map(({id, name, price,description,stock}, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{description}</td>
              <td>{stock}</td> 
            </tr>
          ))}
        </tbody>
      </table>
      <div><button onClick={() => navigate('/')}>
        Logout
      </button></div>
    </div>
  );
};
