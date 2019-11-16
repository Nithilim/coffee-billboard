import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
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
      <Router>
        <Route path="/product=:id">
        <div>
          <CoffeeDetails
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setDetailsOpen={setDetailsOpen}
            handleRemove={handleRemove}
          />
      </div>
        </Route>
        <Route path="/" exact>
        <div className="card-container">
        {coffeeList.map(coffee => (
          <Link to={`/product=${coffee.id}`}>
            <CoffeeItem key={coffee.id} coffee={coffee} setSelectedItem={setSelectedItem} setDetailsOpen={setDetailsOpen}/>
          </Link>
        ))}
      </div>
        </Route>
      </Router>
    
  );
};

// {formOpen && (
//   <CoffeeForm
//     handleFormSubmit={handleFormSubmit}
//     setFormOpen={setFormOpen}
//   />
// )}

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
