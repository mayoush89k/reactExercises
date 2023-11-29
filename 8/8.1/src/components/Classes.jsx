import React from "react";
import "./style.css";

export default function Classes() {
  const boxList = ["box1", "box2", "box3", "box4", "box5"];
  return (
    <div>
      <h1>Classes Styling</h1>
      <div className={boxList[0]}>
        <div className={boxList[1]}>
          <div className={boxList[2]}>
            <div className={boxList[3]}></div>
            <div className={boxList[4]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
