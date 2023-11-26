import React from "react";
import Child from "../Child/Child";
import './Mother.css'

export default function Mother({title}) {
  const kids = [
    { name: "Ori", color: "red" },
    { name: "Ron", color: "blue" },
    { name: "Sigalit", color: "green" },
    { name: "Ruti", color: "yellow" },
    { name: "Alon", color: "purple" },
  ];

  return (
    <div >
      <h2>{title}</h2>
    <div id="mother-wrapper">
      {kids.map((kid, index) => (
        <div key={index}>
          <Child name={kid.name} color={kid.color} />
        </div>
      ))}
    </div>
    </div>
  );
}
