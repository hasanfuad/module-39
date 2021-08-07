import "./App.css";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Shipment from "./component/Shipment/Shipment";
import { createContext, useState } from "react";

export const CategoryContext = createContext();

function App() {
  const [increase, setIncrease] = useState(0); //Put the State in the parent component. Now we can access the STATE to the sibling component;
  return (
    <CategoryContext.Provider value={increase} >
      <p>App Number: {increase}</p>
      <Header increase={increase} setIncrease={setIncrease} />
      <Home/>
      <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;
