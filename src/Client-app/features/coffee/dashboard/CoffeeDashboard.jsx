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
    <div>
      <div>
        {coffeeList.map(coffee => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </div>
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
  setDetailsOpen: PropTypes.func(PropTypes.bool).isRequired,
  detailsOpen: PropTypes.bool.isRequired,
  formOpen: PropTypes.bool.isRequired,
  setFormOpen: PropTypes.func(PropTypes.bool).isRequired,
  handleFormSubmit: PropTypes.func(PropTypes.object, addedItem).isRequired,
  handleRemove: PropTypes.func(PropTypes.object, removedItem).isRequired,
  selectedItem: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func(PropTypes.object).isRequired
};

export default CoffeeDashboard;
