import React from "react";
import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1 id={count > 0 ? "positive" : count < 0 ? "negative" : "zero"}>
        {count}
      </h1>
      <button id="dec-btn" onClick={decrement}>Decrement</button>
      <button id="inc-btn" onClick={increment}>Increment</button>
    </div>
  );
}
