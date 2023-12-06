import { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [currentMenuSelected , setCurrentMenuSelected] = useState("Home")

  return (
    <>
      <ThemeProvider>
        <Menu setCurrentMenuSelected={setCurrentMenuSelected} />
        {currentMenuSelected == "Home" && <Homepage />}
        {currentMenuSelected == "About" && <About />}
        
      </ThemeProvider>
    </>
  );
}

export default App;
