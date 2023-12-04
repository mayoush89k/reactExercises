import React, { useEffect, useState } from "react";
import "./FavoriteColor.css";

export default function FavoriteColor({ ChangeColor }) {
  const [favoriteColor, setFavoriteColor] = useState("red");
  function ChangeColor(newColor) {
    setFavoriteColor(newColor);
  }

  useEffect(() => {
    {
      setTimeout(() => {
        ChangeColor("blue");
      }, 1000);
    }
  }, []);

  return (
    <div>
      <h1>My Favorite color is: {favoriteColor}</h1>
      <div id={favoriteColor} className="container"></div>
    </div>
  );
}
