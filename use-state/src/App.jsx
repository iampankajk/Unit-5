import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [counter,setCounter] = React.useState(5);

  function handlecount(value){
    setCounter(counter+value);
  }

  const double = ()=>{
    setCounter(counter*2);
  }
  return (
    <div className="App">
     
    <h1>counter</h1>
    <h2>{counter}</h2>
    <button onClick={()=>handlecount(1)}>Add</button>
    <button onClick={()=>handlecount(-1)}>Reduce</button>
    <button onClick={double}>double</button>

    </div>
  );
}

export default App;
