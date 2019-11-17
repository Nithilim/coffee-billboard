import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const CoffeeItem = ({
  coffee,
  setSelectedItem
}) => {
  return (
    <Link className="card" to={`/product=${coffee.id}`}>
      <div
        onClick={() => {
          setSelectedItem(coffee)}}>
        <img src={`/public/assets/test1.png`} alt="coffee-item" />
        <h3>{coffee.name}</h3>
        <h4>Price: {coffee.price} {coffee.currency}</h4>
      </div>
    </Link>
  );
};

CoffeeItem.propTypes = {
  coffee: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func,
};

export default CoffeeItem;
