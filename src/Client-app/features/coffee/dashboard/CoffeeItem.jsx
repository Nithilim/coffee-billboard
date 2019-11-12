import React from "react";
import PropTypes from "prop-types";

const CoffeeItem = ({ coffee }) => {
  return (
    <div>
      <img src={`/public/assets/${coffee.name}.jpg`} alt="coffee-item" />
      {/* button should remove item and should be round, show up on hover */}
      <button type="button" />
      <h3>{coffee.name}</h3>
      <h2>{coffee.price}</h2>
    </div>
  );
};

CoffeeItem.propTypes = {
  coffee: PropTypes.object.isRequired
};

export default CoffeeItem;
