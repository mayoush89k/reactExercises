import React from "react";
import { useEffect } from "react";
import useData from "../hooks/useData";
import { SyncLoader } from "react-spinners";

export default function Friends() {
  const FriendsUrl = "https://6571e97ed61ba6fcc013f0b6.mockapi.io/Charactors";

  const { fetchData, isLoading, data, error } = useData(FriendsUrl);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div id="loading">
          <SyncLoader />
        </div>
      ) : (
        <div id="list">
          {data.map((character) => (
            <div key={character.id} className="card">
              <h2>{character.name}</h2>
              <img src={character.avatar} alt={character.name} />
              <p>Votes: {character.votes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
