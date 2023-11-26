import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Component/Button";

function App() {
  const colors = ["blue", "red", "yellow"];
  const [currentColor, setColor] = useState("");

  return (
    <>
      {colors.map((color) => (
        <Button color={color} changeColor={setColor} />
      ))}

      <h1>The Color Selected is: {currentColor}</h1>
    </>
  );
}

export default App;
