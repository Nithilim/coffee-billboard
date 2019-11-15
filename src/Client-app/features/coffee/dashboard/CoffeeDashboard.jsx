import React from "react";
import PropTypes from "prop-types";
import CoffeeItem from "./CoffeeItem";
import CoffeeDetails from "../details/CoffeeDetails";
import CoffeeForm from "../form/CoffeeForm";

const CoffeeDashboard = ({
  coffeeList,
  setDetailsOpen,
  detailsOpen,
  formOpen,
  setFormOpen,
  handleFormSubmit,
  handleRemove,
  selectedItem,
  setSelectedItem
}) => {
    return (
    <div>{
      !detailsOpen &&
      <div className="card-container">
        {coffeeList.map(coffee => (
          <CoffeeItem key={coffee.id} coffee={coffee} setSelectedItem={setSelectedItem} setDetailsOpen={setDetailsOpen}/>
        ))}
      </div>
      }
      
      <div>
        {detailsOpen && !formOpen && selectedItem && (
          <CoffeeDetails
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setDetailsOpen={setDetailsOpen}
          />
        )}
        {formOpen && (
          <CoffeeForm
            handleFormSubmit={handleFormSubmit}
            setFormOpen={setFormOpen}
          />
        )}
      </div>
    </div>
  );
};

CoffeeDashboard.propTypes = {
  coffeeList: PropTypes.array.isRequired,
  setDetailsOpen: PropTypes.func,
  detailsOpen: PropTypes.bool.isRequired,
  formOpen: PropTypes.bool.isRequired,
  setFormOpen: PropTypes.func,
  handleFormSubmit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func,
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func
};

export default CoffeeDashboard;
