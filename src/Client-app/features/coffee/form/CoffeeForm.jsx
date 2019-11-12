import React, { useState } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

const CoffeeForm = ({ handleFormSubmit, setFormOpen }) => {
  const initialState = () => {
    if (initialFormState) return initialFormState;
    else {
      return {
        id: "",
        name: "",
        description: ""
      };
    }
  };

  const [coffee, setCoffee] = useState(initialState);
  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setCoffee({ ...coffee, [name]: value });
  };

  const handleSubmit = () => {
    let addedItem = {
      ...coffee,
      id: uuid()
    };
    handleFormSubmit(addedItem);
  };

  return (
    <div>
      <h3>Coffee creation form</h3>
      <p>Name</p>
      <input
        type="text"
        name="name"
        placeholder="Coffee name"
        onChange={handleInputChange}
      />
      <p>Description</p>
      <input
        type="text"
        name="description"
        placeholder="Coffee Description"
        onChange={handleInputChange}
      />
      <p>Price</p>
      <input
        type="text"
        name="price"
        placeholder="Coffee Price"
        onChange={handleInputChange}
      />
      <p>Image Upload</p>
      <button type="submit" content="Submit" onClick={handleSubmit()} />
      <button type="button" content="Cancel" onClick={setFormOpen(false)} />
    </div>
  );
};

CoffeeForm.prototypes = {
  handleFormSubmit: PropTypes.func(PropTypes.object, addedItem).isRequired,
  setFormOpen: PropTypes.func(PropTypes.bool).isRequired
};

export default CoffeeForm;
