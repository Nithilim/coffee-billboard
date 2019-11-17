import React, {Fragment} from "react";
import PropTypes from "prop-types";
import CoffeeItem from "./CoffeeItem";

const CoffeeDashboard = ({
  coffeeList,
  setSelectedItem
}) => {
    return (
        <Fragment>
        {coffeeList && 
          <div className="card-container">
            {coffeeList.map(coffee => (
              <CoffeeItem key={coffee.id} coffee={coffee} setSelectedItem={setSelectedItem}/>
              ))}
          </div>
        }
      </Fragment>      
  );
};

CoffeeDashboard.propTypes = {
  coffeeList: PropTypes.array,
  setSelectedItem: PropTypes.func
};

export default CoffeeDashboard;
