import React, { useState } from "react";
import store from "../assets/store";
import { Link } from "react-router-dom";

export default function Products() {
    
  return (
    <div id="Products">
      <h1>Products</h1>
      <ul>
        {store.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`} state={{product}} key={product.id}>
              <h2>{product.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
