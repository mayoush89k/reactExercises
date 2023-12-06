import "./App.css";
import Grandfather from "./Components/Grandfather";
import { ArrayProvider } from "./context/ArrayContext";

function App() {

  return (
    <div className="App">
      <ArrayProvider>
        <Grandfather />
      </ArrayProvider>
    </div>
  );
}

export default App;
