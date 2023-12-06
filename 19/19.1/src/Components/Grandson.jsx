import React from "react";
import {useArray } from "../context/ArrayContext";

export default function Grandson() {
  const { arr } = useArray();
  return (
    <div>
      <h1>Grandson</h1>
      <ul>Gifts: </ul>
      {arr.map((gift, i) => (
        <li key={i}>{gift}</li>
      ))}
    </div>
  );
}
