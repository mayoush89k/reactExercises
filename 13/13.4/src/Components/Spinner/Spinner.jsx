import React from "react";
import "./Spinner.css";

export default function Spinner({ index }) {
  return (
    <main id="container">
      {index == 1 && <section id="rotating-ring" className="items"></section>}
      {index == 2 && <section id="rotating-fire" className="items"></section>}
      {index == 3 && <section id="three-dots" className="items"></section>}
      {index == 4 && (
        <section id="three-scaling-dots" className="items"></section>
      )}
    </main>
  );
}
