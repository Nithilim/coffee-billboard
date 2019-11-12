import React from "react";
import PropTypes from "prop-types";
import CoffeeItem from "./CoffeeItem";

const CoffeeDashboard = ({ coffeeList }) => {
  return (
    <div>
      {coffeeList.map(coffee => (
        <CoffeeItem key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

CoffeeDashboard.propTypes = {
  coffeeList: PropTypes.array.isRequired
};

export default CoffeeDashboard;
