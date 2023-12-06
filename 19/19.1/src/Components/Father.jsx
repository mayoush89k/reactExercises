import React, { useEffect } from "react";
import Son from "./Son";
import { useArray } from "../context/ArrayContext";

export default function Father() {
  const { arr, updateArr } = useArray();

  useEffect(() => {
    updateGifts();
  }, []);

  function updateGifts() {
    console.log("first");
    updateArr(["Ball", "Doll", "T-Shirt", "Sweater", "Purse"]);
  }
  return (
    <div>
      <Son />
    </div>
  );
}
