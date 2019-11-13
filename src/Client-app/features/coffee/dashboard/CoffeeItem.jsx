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
      onClick={() => {
        setSelectedItem(coffee);
        setDetailsOpen(true);
      }}
    >
      <img src={`/public/assets/${coffee.name}.jpg`} alt="coffee-item" />
      {/* button should remove item and should be round, show up on hover */}
      <button type="button" />
      <h3>{coffee.name}</h3>
      <h2>{coffee.price}</h2>
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
