import React from "react";

const CoffeeForm = () => {
  return (
    <div>
      <h3>Coffee creation form</h3>
      <p>Name</p>
      <input type="text" name="coffeeName" placeholder="Coffee name" />
      <p>Descriptio</p>
      <input
        type="text"
        name="coffeeDescription"
        placeholder="Coffee Description"
      />
      <p>Price</p>
      <input type="text" name="coffeePrice" placeholder="Coffee Price" />
      <p>Image Upload</p>
      <button type="submit" content="Submit" />
      <button type="button" content="Cancel" />
    </div>
  );
};
