import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spinner from "./Components/Spinner/Spinner";
import { useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [activate, setActivate] = useState(true);
  useEffect(() => {
    // timer is active
    const random = (Math.random() * 4).toFixed();
    activate && setIndex(random);
    setTimeout(() => {
      setActivate(false);
      setIndex(0);
    }, 5000);
    // clean up the timer, do deactivate it
    return () => {
      setIndex(0);
    };
  }, [index]);

  return <>{index > 0 && <Spinner index={index} />} </>;
}

export default App;
