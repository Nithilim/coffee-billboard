import React, { useState } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const CoffeeForm = ({ handleFormSubmit }) => {
  const [coffee, setCoffee] = useState({
    name: "",
    description: "",
    price: null,
    currency: "",
    imageUrl: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setCoffee({ ...coffee, [name]: value });
  };

  return (
    <div className="data-container">
      <h2>Coffee creation form</h2>
      <h4>Name</h4>
      <input
        type="text"
        name="name"
        placeholder="Coffee name"
        onChange={handleInputChange}
        value={coffee.name}
      />
      <h4>Description</h4>
      <textarea
        type="text"
        name="description"
        placeholder="Coffee Description"
        onChange={handleInputChange}
        value={coffee.description}
      />
      <h4>Price</h4>
      <input
        type="number"
        name="price"
        placeholder="Coffee Price"
        onChange={handleInputChange}
        value={coffee.price}
      />
      <h4>Currency</h4>
      <input 
        type="text"
        name="currency"
        placeholder="Coffee Price Currency"
        onChange={handleInputChange}
        value={coffee.currency}/>
      <h4>Image Url</h4>
      <input
        type="text"
        name="imageUrl"
        placeholder="Image Url"
        onChange={handleInputChange}
        value={coffee.imageUrl}/>
      <br/>
      <div className="button-container">
        <Link to="/">
        <button className="green-btn" type="submit" onClick={()=>{
          let addedItem = {
            ...coffee
          };
          handleFormSubmit(addedItem);
        }}>
          Submit
        </button>
        </Link>
        <Link to="/">
          <button className="dark-btn" type="button">Close</button>
        </Link>
      </div>
    </div>
  );
};

CoffeeForm.prototypes = {
  handleFormSubmit: PropTypes.func.isRequired
};

export default CoffeeForm;
