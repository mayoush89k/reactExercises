import { useState } from "react";
import "./App.css";
import InlineStyling from "./components/InlineStyling";
import Classes from "./components/Classes";
import Styled from "./components/Styled";

function App() {
  const [btn, setBtn] = useState("inline");
  return (
    <>
      <button onClick={() => setBtn("inline")}>inlineStyling</button>
      <button onClick={() => setBtn("classes")}>Classes</button>
      <button onClick={() => setBtn("styled")}>Styled components</button>
      {btn == "inline" ? (
        <InlineStyling />
      ) : btn == "classes" ? (
        <Classes />
      ) : (
        <Styled />
      )}
    </>
  );
}

export default App;
