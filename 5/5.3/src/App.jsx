import "./App.css";
import Mother from "./Components/Mother/Mother";

function App() {
  const title = "A Tale of Five Balloons";

  return (
    <div id="main-container">
      <Mother title={title} />
    </div>
  );
}

export default App;
