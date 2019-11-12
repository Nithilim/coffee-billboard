import React from "react";
import PropTypes from "prop-types";

const CoffeeItem = ({ coffee }) => {
  return (
    <div>
      <img src={`/public/assets/${coffee.name}.jpg`} alt="coffee-item" />
      <h3>{coffee.name}</h3>
      <h2>{coffee.price}</h2>
    </div>
  );
};

CoffeeItem.propTypes = {
  coffee: PropTypes.object.isRequired
};

export default CoffeeItem;
