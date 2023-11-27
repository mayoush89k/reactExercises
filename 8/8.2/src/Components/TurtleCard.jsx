import React from "react";
import "./style.css";

export default function TurtleCard({turtle, handleUpdatingOrders }) {
  return (
    <div id="turtle-card">
      <h3>turtle.name</h3>
      <img src={turtle.img} alt={turtle.name + " Photo"} />
      <h5>Topping:</h5>
      <div id="topping">
        {turtle.pizzaToppings.map((top, i) => {
          return (
            <button key={i} onClick={() => handleUpdatingOrders(top)}>
              {top.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
