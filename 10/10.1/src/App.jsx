import { useState, useRef } from "react";
import "./App.css";
import Video from "./Component/Video";

function App() {
  const videoRef = useRef();

  function handlePlay() {
    videoRef.current.play();
  }
  function handlePause() {
    videoRef.current.pause();
  }

  return (
    <>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <Video videoRef={videoRef} />
      </div>
    </>
  );
}

export default App;
