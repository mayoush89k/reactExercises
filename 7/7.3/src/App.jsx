import { useState } from "react";
import "./App.css";

function App() {
  const [btn, showBtn] = useState(false);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    ageRange: ["0-15", "16-25", "16-40", "41-65", "65+"],
    text: "",
    age: "",
  });

  return (
    <>
      <form action="review">
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id={"firstNameinput"}
            onInput={(e) =>
              setDetails({ ...details, firstName: e.target.value })
            }
            value={details.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id={"lastNameinput"}
            onInput={(e) =>
              setDetails({ ...details, lastName: e.target.value })
            }
            value={details.lastName}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <select
            id="age"
            onChange={(e) => setDetails({ ...details, age: e.target.value })}
          >
            <option selected disabled defaultValue={details.age}>
              {details.age}
            </option>
            {details.ageRange.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="freeText">Free Text: </label>
          <textarea
            name="freeText"
            id="freeTextinput"
            cols="30"
            rows="10"
            onInput={(e) => setDetails({ ...details, text: e.target.value })}
            value={details.text}
          ></textarea>
        </div>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            showBtn(true);
          }}
        >
          Submit
        </button>
      </form>
      {btn && (
        <div id="show-btn">
          <h2>{details.firstName}</h2>
          <p>{details.lastName}</p>
          <p>{details.age}</p>
          <p>{details.text}</p>
          <button onClick={() => showBtn(false)}>Back</button>
          <button
            onClick={() => {
              showBtn(false);
              setDetails({
                ...details,
                firstName: "",
                lastName: "",
                text: "",
                age: "",
              });
            }}
          >
            Send Survey
          </button>
        </div>
      )}
    </>
  );
}

export default App;
