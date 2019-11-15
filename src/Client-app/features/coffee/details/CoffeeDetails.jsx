import React from "react";
import PropTypes from "prop-types";

const CoffeeDetails = ({ selectedItem, setSelectedItem, setDetailsOpen }) => {
  return (
    <div className="details">
      <img src="../../../public/assets/test1.png" alt="coffee image" />
      <h3>{selectedItem.name}</h3>
      <p className="description">{selectedItem.description}</p>
      <h3>{selectedItem.price}</h3>
      <div>
      <button
      className="red-btn"
        type="button"
      >Delete</button>
      <button
      className="dark-btn"
        type="button"
        onClick={() => {
          setDetailsOpen(false);
          setSelectedItem(null);
        }}
      >Close</button>
      </div>
      
    </div>
  );
};

CoffeeDetails.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func,
  setDetailsOpen: PropTypes.func
};

export default CoffeeDetails;
