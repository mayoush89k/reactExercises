import { useState } from "react";

const useCounter = (initial) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const plus = (value) => {
    setCount((count) => count + value * 1);
  };
  const minus = (value) => {
    setCount((count) => count - value);
  };
  const multiply = (value) => {
    setCount((count) => count * value);
  };
  const dividedBy = (value) => {
    setCount((count) => count / value);
  };

  return { count, increment, decrement , plus , minus , multiply, dividedBy};
};

export default useCounter;
