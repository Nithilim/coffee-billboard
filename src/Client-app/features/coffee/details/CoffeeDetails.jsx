import React from "react";
import PropTypes from "prop-types";

const CoffeeDetails = ({ coffeeItem }) => {
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

CoffeeDetails.propTypes = {
  coffeeItem: PropTypes.object.isRequired
};

export default CoffeeDetails;
