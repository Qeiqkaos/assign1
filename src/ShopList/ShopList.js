import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./ShopList.css";
import data from "./mock-data.json";

const ShopList = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
  });
  

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      price: addFormData.price,
      description: addFormData.description,
      stock: addFormData.stock,
    };
    const newContacts = [...contacts, newContact];
    let x = 1, y=0;
    for (let i = 0; i < contacts.length; i++) {
      if( newContact.name==contacts[i].name && newContact.id != contacts[i].id){
        x = 2;
        y=i;
        break;
      }}
    if(x==2){
      newContacts.pop();
      let s = parseInt(newContacts[y].stock) + parseInt(newContact.stock);
      newContacts[y].stock=s;
    }
      setContacts(newContacts);
      
  };
    function dynamicSort(property) {
      var sortOrder = 1;
    
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          if(sortOrder == -1){
              return b[property].localeCompare(a[property]);
          }
          else{
              return a[property].localeCompare(b[property]);
          }        
      }
    }
    let b = 1;
const myFunction = (event) => {
  event.preventDefault();
      setAddFormData();
      setContacts(contacts.sort(dynamicSort("name")));
  }; 
  const myFunction1 = (event) => {
    event.preventDefault();
    contacts.sort(function(a, b) {
      return parseFloat(a.id) - parseFloat(b.id);
  });
    }; 

  return (
    <div className="app-container">
      <center><h1>Catalog</h1></center>
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.name}</td>
                <td>{contact.price}</td>
                <td>{contact.description}</td>
                <td>{contact.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>

      <center><h2>Add a clothes</h2></center>
      <center><form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="price"
          required="required"
          placeholder="Enter a price..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Enter a description..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          min="1"
          name="stock"
          required="required"
          placeholder="Enter a stock..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form></center>
      <div className="Switch">
      <button onClick={myFunction}>Sort by A-Z</button>
      <button onClick={myFunction1}>Sort by 0-9</button>
      </div>
    </div>
  );
};

export default ShopList;