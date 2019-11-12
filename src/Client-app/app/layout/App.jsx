import React, { useState, Fragment } from "react";
import Header from "./Header";
import CoffeeBillboard from "../../features/coffee/dashboard/CoffeeDashboard";

const App = () => {
  const [coffeeList, setCoffeeList] = useState([
    { id: 1, name: "test1", price: 20, description: "adadadada" },
    { id: 2, name: "test2", price: 22, description: "adadadada" },
    { id: 3, name: "test3", price: 23, description: "adadadada" },
    { id: 4, name: "test4", price: 24, description: "adadadada" },
    { id: 5, name: "test5", price: 25, description: "adadadada" }
  ]);

  const [coffeeFormOpen, setCoffeeFormOpen] = useState(false);
  const [coffeeDetailsOpen, setCoffeeDetailsOpen] = useState(false);

  const handleCoffeeFormSubmit = addedItem => {
    setCoffeeList([...coffeeList, addedItem]);
  };
  const handleCoffeeItemRemove = removedItem => {
    setCoffeeList([...coffeeList.filter(i => i.id !== removedItem.id)]);
  };

  console.log(coffeeList);
  return (
    <Fragment>
      <Header />
      <CoffeeBillboard
        coffeeList={coffeeList}
        setDetailsOpen={setDetailsOpen}
        detailsOpen={detailsOpen}
        formOpen={setCoffeeFormOpen}
        handleFormSubmit={handleCoffeeFormSubmit}
        handleRemove={handleCoffeeItemRemove}
      />
    </Fragment>
  );
};

export default App;
