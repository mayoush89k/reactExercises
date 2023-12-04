import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setBox1("slide-box1");
      setBox2("slide-box2");
      setBox3("slide-box3");
    }, 1000);
    return () => {
      setTimeout(() => {
        setBox1("");
        setBox2("");
        setBox3("");
      }, 4000);
    };
  }, []);

  return (
    <>
      <div id={box1}></div>
      <div id={box2}></div>
      <div id={box3}></div>
    </>
  );
}

export default App;
