
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Shipment from './component/Shipment/Shipment';
import { useState } from 'react';

function App() {
  
  const [increase, setIncrease] = useState(0); //Put the State in the parent component. Now we can access the STATE to the sibling component;
  return (
    <div className="App">
      <p>App Number: {increase}</p>
      <Header increase={increase} setIncrease={setIncrease}/>
      <Home increase={increase}/>
      <Shipment increase={increase}/>
    </div>
  );
}

export default App;
