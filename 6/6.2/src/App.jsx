import { useState } from "react";
import "./App.css";
import Box from "./Component/Box";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Box changeVisibility={setShow} isVisible={show}/>
    </>
  );
}

export default App;
