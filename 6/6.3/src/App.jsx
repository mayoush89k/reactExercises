import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("zero");

  function changeNumberStyle(currentCounter) {
    return currentCounter > 0 ? "positive" : currentCounter < 0 ? "negative" : "zero";
  }

  return (
    <>
      <button id="inc-btn"
        onClick={() => {
          setColor(changeNumberStyle(counter + 1));
          setCounter(counter => counter + 1);
        }}
      >
        increment
      </button>
      <button id="dec-btn"
        onClick={() => {
          setColor(changeNumberStyle(counter - 1));
          setCounter(counter => counter - 1);
        }}
      >
        decrement
      </button>
      <label id={color}>{counter}</label>
    </>
  );
}

export default App;
