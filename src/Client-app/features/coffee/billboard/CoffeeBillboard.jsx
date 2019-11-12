import React from "react";
import PropTypes from "prop-types";
import CoffeeItem from "./CoffeeItem";

const CoffeeBillboard = ({ coffeeList }) => {
  return (
    <div>
      {coffeeList.map(coffee => (
        <CoffeeItem key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

CoffeeBillboard.propTypes = {
  coffeeList: PropTypes.array.isRequired
};

export default CoffeeBillboard;
