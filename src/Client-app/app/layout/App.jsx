import React, { useState, Fragment } from "react";
import Header from "./Header";
import CoffeeBillboard from "../../features/coffee/billboard/CoffeeBillboard";

const App = () => {
  const [coffeeList, setCoffeeList] = useState([
    { id: 1, name: "test1", price: 20, description: "adadadada" },
    { id: 2, name: "test2", price: 22, description: "adadadada" },
    { id: 3, name: "test3", price: 23, description: "adadadada" },
    { id: 4, name: "test4", price: 24, description: "adadadada" },
    { id: 5, name: "test5", price: 25, description: "adadadada" }
  ]);

  const handleCoffeeFormSubmit = () => {};

  console.log(coffeeList);
  return (
    <Fragment>
      <Header />
      <CoffeeBillboard coffeeList={coffeeList} />
    </Fragment>
  );
};

export default App;
