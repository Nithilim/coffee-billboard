import React from "react";
import PropTypes from "prop-types";

const CoffeeItem = ({
  coffee,
  setSelectedItem,
  setDetailsOpen,
  handleRemove
}) => {
  return (
    <div
      className="card"
      onClick={() => {
        setSelectedItem(coffee);
        setDetailsOpen(true);
      }}
    >
      <img src={`/public/assets/test1.png`} alt="coffee-item" />
      <h3>{coffee.name}</h3>
      <h4>Price: {coffee.price}</h4>
    </div>
  );
};

CoffeeItem.propTypes = {
  coffee: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func,
  setDetailsOpen: PropTypes.func,
  handleRemove: PropTypes.func
};

export default CoffeeItem;
