import React from "react";
import "./box.css";

export default function Box({ changeVisibility, isVisible }) {
  return (
    <div id="main-container">
      <button onClick={() => changeVisibility((isVisible) => !isVisible)}>
        show/hide
      </button>
      {isVisible && <div id="box"></div>}
    </div>
  );
}
