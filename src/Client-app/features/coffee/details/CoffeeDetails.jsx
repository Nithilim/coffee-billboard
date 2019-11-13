import React from "react";
import PropTypes from "prop-types";

const CoffeeDetails = ({ selectedItem, setSelectedItem, setDetailsOpen }) => {
  return (
    <div>
      <img src="" alt="coffee image" />
      <h3>{selectedItem.name}</h3>
      <p>{selectedItem.description}</p>
      <h3>{selectedItem.price}</h3>
      <button
        type="button"
        content="Close"
        onClick={() => {
          setDetailsOpen(false);
          setSelectedItem(null);
        }}
      />
    </div>
  );
};

CoffeeDetails.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func,
  setDetailsOpen: PropTypes.func
};

export default CoffeeDetails;
