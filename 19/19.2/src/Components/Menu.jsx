import React from "react";
import { useTheme } from "../context/ThemeContext";
import './Style.css'

export default function Menu({setCurrentMenuSelected}) {
  const { theme, changeTheme } = useTheme();

  return (
    <div id={theme ? "light-menu" : "dark-menu"}>
      <div id="menu-container">
        <ul id="menu-list">
          <li className="menu-item" onClick={() => setCurrentMenuSelected("Home")}>Home</li>
          <li className="menu-item" onClick={() => setCurrentMenuSelected("About")}>About</li>
        </ul>
        <button id={theme ? "light-menu" : "dark-menu"} onClick={changeTheme}>
          {theme ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}
