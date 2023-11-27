import React from "react";
import "./style.css";

export default function Card({ olderPersons }) {
  return (
    <div id="cards">
      {olderPersons.map((person, i) => (
        <div id="card" key={i}>
          <h1>Name: {person.name}</h1>
          <p>Birthday: {person.birthday}</p>
          <p>
            Favorite Meats:{" "}
            {person.favoriteFoods.meats.map((meat, index) => {
              return <span key={index}>{meat} </span>;
            })}
          </p>
          <p>
            Favorite Fishes:{" "}
            {person.favoriteFoods.fish.map((fish, index) => {
              return <span key={index}>{fish} </span>;
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
