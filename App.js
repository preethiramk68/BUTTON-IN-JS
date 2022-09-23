import React from "react";
import "./App.css";
 

function clickme(){
  alert("you clicked me");
}

export default function App() {
  return (
    <div className="App">

      <button onClick={clickme}>
      CLARIT
      </button>
    </div>

    
  );
}


