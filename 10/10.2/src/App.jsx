import mountain from "./assets/mountain.jpg";
import sunset from "./assets/sunset.jpg";
import mountainMod from "./assets/mountain-modified.jpg";
import sunsetMod from "./assets/sunset-modified.jpg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [img1, setImg] = useState(mountain);
  const [img2, setImg2] = useState(sunset);
  const converterRef1 = useRef(img1);
  const converterRef2 = useRef(img2);

  function onMouseOverHandle(converterRef, newIMG) {
    newIMG == mountainMod ? setImg(newIMG) : setImg2(newIMG);
    converterRef.current = newIMG;
  }
  function onMouseOutHandle(converterRef, newIMG) {
    newIMG == mountain ? setImg(newIMG) : setImg2(newIMG);
    converterRef.current = newIMG;
  }

  return (
    <>
      <Picture
        img={img1}
        converterRef={converterRef1}
        black={mountainMod}
        color={mountain}
        onMouseOutHandle={onMouseOutHandle}
        onMouseOverHandle={onMouseOverHandle}
      />
      <Picture
        img={img2}
        converterRef={converterRef2}
        black={sunsetMod}
        color={sunset}
        onMouseOutHandle={onMouseOutHandle}
        onMouseOverHandle={onMouseOverHandle}
      />
    </>
  );
}

function Picture({
  img,
  converterRef,
  color,
  black,
  onMouseOutHandle,
  onMouseOverHandle,
}) {
  return (
    <img
      src={img}
      id="img"
      alt=""
      ref={converterRef}
      onMouseOver={() => {
        onMouseOverHandle(converterRef, black);
      }}
      onMouseOut={() => {
        onMouseOutHandle(converterRef, color);
      }}
    />
  );
}

export default App;
