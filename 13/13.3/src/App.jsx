import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [box, setBox] = useState("");
  const colors = ["red", "yellow", "blue", "green", "gray"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setBox(colors[index]);
      index < 5 ? setIndex((index) => index + 1) :
      index == 5 ? setBox("roundRadius") : setBox('')
    }, 500);
  }, [index]);

  return (
    <>
      <div className="box" id={box}></div>
    </>
  );
}

export default App;
