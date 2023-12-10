import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Product() {
  const { state } = useLocation();

  return (
    <div>
        <Link to="/" >Back</Link>
      <h1>Product #{state.product.id}</h1>
      <img src={state.product.imageUrl} />
      <p>Name: {state.product.title}</p>
      <p>Price: {state.product.price}$</p>
      <p>Description: {state.product.size}</p>
    </div>
  );
}
