import React, { useState, useEffect, Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import CoffeeDashboard from "../../features/coffee/dashboard/CoffeeDashboard";
import agent from "../../api/agent";
import CoffeeDetails from "../../features/coffee/details/CoffeeDetails";

const App = () => {
  const [coffeeList, setCoffeeList] = useState([]);
  const [coffeeFormOpen, setCoffeeFormOpen] = useState(false);
  const [coffeeDetailsOpen, setCoffeeDetailsOpen] = useState(false);
  const [selectedCoffeeItem, setSelectedCoffeeItem] = useState(null);

  const handleCoffeeFormSubmit = addedItem => {
    agent.Coffee.create(addedItem).then(() => {
      setCoffeeList([...coffeeList, addedItem]);
    });
  };

  const handleCoffeeItemRemove = removedItem => {
    agent.Coffee.delete(removedItem.id).then(() => {
      setCoffeeList([...coffeeList.filter(i => i.id !== removedItem.id)]);
    })
  };

  const handleRandomSeedGeneration = () => {
    agent.Coffee.generateRandom().then(response => {
      setCoffeeList([coffeeList, response.data]);
    });
  };

  useEffect(() => {
    agent.Coffee.getAll().then(response => {
      setCoffeeList(response.data);
    });
  }, []);

  return (
    <Router>
      <button className="dark-btn" onClick={() => handleRandomSeedGeneration()}/>
      <Header />
      <Switch>
        <Route path="/" exact>
          <CoffeeDashboard
          coffeeList={coffeeList}
          setDetailsOpen={setCoffeeDetailsOpen}
          detailsOpen={coffeeDetailsOpen}
          formOpen={coffeeFormOpen}
          setFormOpen={setCoffeeFormOpen}
          handleFormSubmit={handleCoffeeFormSubmit}
          handleRemove={handleCoffeeItemRemove}
          selectedItem={selectedCoffeeItem}
          setSelectedItem={setSelectedCoffeeItem}
          />
        </Route>
        <Route path="/product=:id">
          {selectedCoffeeItem &&
            <CoffeeDetails
            selectedItem={selectedCoffeeItem}
            setSelectedItem={setSelectedItem}
            setDetailsOpen={setDetailsOpen}
            handleRemove={handleRemove}
          />
          }
        </Route>
      </Switch>
    </Router> 
  );
};

export default App;
