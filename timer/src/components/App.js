import React from "react";
import Time from "./Time";
import Btn from "./Btn"

function App() {
  return (
    <div className="App">
    <div className="timer">
    <Time hms="00" smh="Hour"/>
      <Time hms="00" smh="Minutes"/>
      <Time hms="00" smh="Seconds"/>
       
    </div>
      <Btn type="Start" />
      <Btn type="Reset" /> 
    </div>
  );
}
export default App