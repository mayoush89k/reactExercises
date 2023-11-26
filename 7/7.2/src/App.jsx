import { useState } from "react";
import "./App.css";

function App() {
  const [checkboxList, changeCheckBoxList] = useState([
    {
      title: "I read the term of the app",
      isChecked: false,
    },
    {
      title: "I accept the term of the app",
      isChecked: false,
    },
    {
      title: "I want to get the weekly news letter",
      isChecked: true,
    },
    {
      title: "I want to get sales and offers",
      isChecked: true,
    },
  ]);

  return (
    <>
      {checkboxList.map((item, index) => {
        if (item.isChecked)
          return (
            <div key={index}>
              <input
                type="checkbox"
                name="check"
                id="check"
                defaultChecked
                onChange={() =>
                  changeCheckBoxList([...checkboxList, !item.isChecked])
                }
              />
              {item.title}
            </div>
          );
        else
          return (
            <div key={index}>
              <input
                type="checkbox"
                name="check"
                id="check"
                onChange={() =>
                  changeCheckBoxList([...checkboxList, !item.isChecked])
                }
              />
              {item.title}
            </div>
          );
      })}
    </>
  );
}

export default App;
