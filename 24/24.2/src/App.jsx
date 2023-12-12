import { useState } from "react";
import "./App.css";
import Products from "./Components/Products";
import Friends from "./Components/Friends";

function App() {
  const [btnClicked, setBtnClicked] = useState("Products");

  return (
    <div className="App">
      <button onClick={() => setBtnClicked("Products")}>Products</button>
      <button onClick={() => setBtnClicked("Friends")}>Friends</button>

      {btnClicked == "Products" && <Products />}
      {btnClicked == "Friends" && <Friends />}
    </div>
  );
}

export default App;
