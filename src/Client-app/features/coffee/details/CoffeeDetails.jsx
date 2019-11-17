import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const CoffeeDetails = ({ selectedItem, setSelectedItem, handleRemove}) => {
  return (
    <div className="data-container">
      <img src="../../../public/assets/test1.png" alt="coffee image" />
      <h3>{selectedItem.name}</h3>
      <p className="description">{selectedItem.description}</p>
      <h3>{selectedItem.price} {selectedItem.currency}</h3>
      <div>
        <Link to="/">
        <button
        onClick={()=>handleRemove(selectedItem)}
        className="red-btn"
        type="button">Delete
        </button>
        </Link>
      
      <Link to="/">
      <button
      className="dark-btn"
        type="button"
        onClick={() => {
          setSelectedItem(null);
        }}
      >Close</button>
      </Link>
      
      </div>
      
    </div>
  );
};

CoffeeDetails.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func,
  handleRemove: PropTypes.func
};

export default CoffeeDetails;
