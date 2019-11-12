import React from "react";

const CoffeeDetails = coffeeItem => {
  return (
    <div>
      <img src="" alt="coffee image" />
      <h3>{coffeeItem.name}</h3>
      <p>{coffeeItem.description}</p>
      <h3>{coffeeItem.price}</h3>
      <button type="button" content="Close" />
    </div>
  );
};
