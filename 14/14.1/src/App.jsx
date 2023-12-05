import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";
const DisplayCategories = ({ categoryList }) => {
  return (
    <ul>
      {categoryList.map((category, i) => {
        <li key={i}>{category}</li>;
      })}
    </ul>
  );
};
function App() {
  const url = "https://api.chucknorris.io/jokes/random";
  const categoryURL = "https://api.chucknorris.io/jokes/categories";
  const byCategoryURL = "https://api.chucknorris.io/jokes/random?category=";
  const bySearchURL = "https://api.chucknorris.io/jokes/search?query=";
  const [inputValue, setInputValue] = useState("");
  const [joke, setJoke] = useState("");
  const myRef = useRef("");
  const [option, setOption] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchApiByCategory();
  }, [option]);

  useEffect(() => {
    fetchApi();
    fetchApiCategory();
  }, []);
  async function fetchApi() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJoke(data.value);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchApiCategory() {
    try {
      const res = await fetch(categoryURL);
      const data = await res.json();
      setTimeout(() => {
        setCategoryList(data);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchApiByCategory() {
    try {
      const res = await fetch(byCategoryURL + myRef.current);
      const data = await res.json();
      setJoke(data.value);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchApiBySearch(inputValue) {
    try {
      const res = await fetch(bySearchURL + inputValue);
      const data = await res.json();
      setJoke(data.result[0].value);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          fetchApiBySearch(inputValue);
          setInputValue("");
        }}
      >
        Search
      </button>
      <select
        ref={myRef}
        onChange={(e) => {
          setOption(e.target.value);
          myRef.current = e.target.value;
        }}
      >
        {categoryList.map((category, i) => {
          return (
            <option key={i} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <h6>{joke}</h6>
      <button onClick={() => fetchApi(url)}>Get a Joke</button>
    </>
  );
}

export default App;
