import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const boxStyling = [
    {
      backgroundColor: "lightgreen",
      width: "80vw",
      height: "80vh",
      position: "absolute",
      left: "1vw",
      top: "1vh",
    },
    {
      backgroundColor: "lightblue",
      width: "70vw",
      height: "70vh",
      position: "absolute",
      left: "5vw",
      top: "5vh",
    },
    {
      backgroundColor: "pink",
      width: "60vw",
      height: "60vh",
      position: "absolute",
      left: "10vw",
      top: "10vh",
    },
    {
      backgroundColor: "plum",
      width: "50vw",
      height: "20vh",
      position: "absolute",
      left: "15vw",
      top: "15vh",
      display: "block",
    },
    {
      backgroundColor: "plum",
      width: "50vw",
      height: "20vh",
      position: "absolute",
      left: "15vw",
      top: "40vh",
      display: "block",
    },
  ];
  return (
    <>
      <div style={{position: "relative"}}>
        {boxStyling.map((box, i) => {
          console.log(box);
          return <Box key={i} id={box} />;
        })}
      </div>
    </>
  );
}

export default App;
