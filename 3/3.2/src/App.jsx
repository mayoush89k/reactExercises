import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const data = ["hello", "world"];
  let result = "";

  const number1 = 5;
  const number2 =6;

  const string  = "I love React!"
  return (
    <>
      <div>
        {/* 1. Hello World */}
        {data.map((str) => {
          result += str.substring(0, 1).toUpperCase() + str.substring(1) + " ";
        })}
        {console.log(result)}
        {result}
      </div>
      {/* 2. 5 + 6  = 11 */}
      <div>{number1} + {number2} = {number1 + number2}</div>
      {/* 3. length of the string */}
      <div>The String's length is {string.length}</div>
    </>
  );
}

export default App;
