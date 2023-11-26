import React from "react";
import './button.css'

export default function Button({color , changeColor}) {
  return (
      <button onClick={() => changeColor(color)} id={color}>{color}</button>
  );
}
