import React from "react";

export default function Name({ namesList }) {
  return (
    <div>
        <h1>All Names: </h1>
        <h2>
      {namesList.map((name, i) => (
          <span key={i} > {name } </span>
          ))}

        </h2>
    </div>
  );
}
