import React from "react";
import useData from "../hooks/useData";
import { ClimbingBoxLoader } from "react-spinners";
import { useEffect } from "react";
import './style.css'

export default function Products() {
  const ProductsUrl = "https://6555cde784b36e3a431e5f45.mockapi.io/products";
  const { fetchData, data, isLoading, error } = useData(ProductsUrl);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div id="loading">
          <ClimbingBoxLoader />
        </div>
      ) : (
        <div id="list">
          {data.map((product) => (
            <div key={product.id} className="card">
              <h3>{product.name}</h3>
              <img src={product.avatar} />
              <p>{product.price}$</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
