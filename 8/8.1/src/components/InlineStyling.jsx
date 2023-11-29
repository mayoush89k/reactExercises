import React from 'react'
import Box from './Box';

export default function InlineStyling() {
  
  const boxStyling = [
    {
      backgroundColor: "lightgreen",
      width: "80vw",
      height: "80vh",
      position: "absolute",
      left: "1vw",
      top: "10vh",
    },
    {
      backgroundColor: "lightblue",
      width: "70vw",
      height: "70vh",
      position: "absolute",
      left: "5vw",
      top: "15vh",
    },
    {
      backgroundColor: "pink",
      width: "60vw",
      height: "60vh",
      position: "absolute",
      left: "10vw",
      top: "20vh",
    },
    {
      backgroundColor: "plum",
      width: "50vw",
      height: "20vh",
      position: "absolute",
      left: "15vw",
      top: "25vh",
      display: "block",
    },
    {
      backgroundColor: "plum",
      width: "50vw",
      height: "20vh",
      position: "absolute",
      left: "15vw",
      top: "50vh",
      display: "block",
    },
  ];
  return (
    <div style={{position: "relative"}}>
      <h1>Inline Styling</h1>
    {boxStyling.map((box, i) => {
      return <Box key={i} id={box} />;
    })}
  </div>
  )
}
