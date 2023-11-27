import { useState } from "react";
import Data from "./assets/data";
import "./App.css";
import Name from "./Components/Name";
import Card from "./Components/Card";

function App() {
  const [dataList, updateDataList] = useState(Data);

  function allNames() {
    return dataList.map((person) => person.name);
  }

  function greaterThan(year) {
    return dataList.filter(
      (person) => new Date(person.birthday).getYear() < year
    );
  }

  return (
    <>
      <Name namesList={allNames()} />
      <Card olderPersons={greaterThan(90)} />
    </>
  );
}

export default App;
