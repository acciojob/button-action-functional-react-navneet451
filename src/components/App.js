import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick=()=>{
    setIsVisible(true);
  }
  return (
    <div id="main">
    <button onClick={handleClick}>click me</button>
  {isVisble ? (
    <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
    ) : (
      ""
    )}
    </div>
  );
}


export default App;
