import React, { useState, useEffect, Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import agent from "../../api/agent";
import Header from "./Header";
import CoffeeDashboard from "../../features/coffee/dashboard/CoffeeDashboard";
import CoffeeDetails from "../../features/coffee/details/CoffeeDetails";
import CoffeeForm from "../../features/coffee/form/CoffeeForm";
import Menu from "./Menu";

const App = () => {
  const [coffeeList, setCoffeeList] = useState([]);
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
      <Header />
      <Switch>
        <Route path="/" exact>
        <Menu 
          handleRandomSeedGeneration={handleRandomSeedGeneration}/>
          <CoffeeDashboard
            coffeeList={coffeeList}
            setSelectedItem={setSelectedCoffeeItem}/>
        </Route>
        <Route path="/product=:id">
          {selectedCoffeeItem &&
            <CoffeeDetails
              selectedItem={selectedCoffeeItem}
              setSelectedItem={setSelectedCoffeeItem}
              handleRemove={handleCoffeeItemRemove}/>
          }
        </Route>
        <Route path="/create">
          <CoffeeForm handleFormSubmit={handleCoffeeFormSubmit}/>
        </Route>
      </Switch>
    </Router> 
  );
};

export default App;
