import React from "react";
import PropTypes from "prop-types";
import styles from "../../../app/styles/buttons.less";

const CoffeeDetails = ({ selectedItem, setSelectedItem, setDetailsOpen }) => {
  return (
    <div>
      <img src="" alt="coffee image" />
      <h3>{selectedItem.name}</h3>
      <p>{selectedItem.description}</p>
      <h3>{selectedItem.price}</h3>
      <button
      className="btn"
        type="button"
        onClick={() => {
          setDetailsOpen(false);
          setSelectedItem(null);
        }}
      >Close</button>
    </div>
  );
};

CoffeeDetails.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func,
  setDetailsOpen: PropTypes.func
};

export default CoffeeDetails;
