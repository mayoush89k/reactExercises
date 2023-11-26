import React from "react";
import Balloon from "../Balloon/Balloon";

export default function Child({ name, color }) {
  return (
    <div id="child-wrapper">
      <span>{name}</span>
      <Balloon color={color} />
    </div>
  );
}
