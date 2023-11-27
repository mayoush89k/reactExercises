import { useState } from "react";
import "./App.css";
import data from "./assets/data";
import TurtleCard from "./Components/TurtleCard";
import Orders from "./Components/Orders";

function App() {
  const [turtles, setTurtles] = useState(data);
  const [orderList, updateOrderList] = useState([]);
  const [isFull, setIsFull] = useState(false);
  const [error, setError] = useState("");

  function handleUpdatingOrders(topping) {
    if (orderList.length > 0) {
      if (orderList.length < 5) {
        const checkExist = orderList.find((order) => order == topping);
        if (!checkExist) {
          updateOrderList([...orderList, topping]);
          setError("");
          errorMsg(error);
        } else {
          setError("Already selected");
          errorMsg(error);
        }
      } else {
        setIsFull(true);
        setError("You have reached the maximum possible topping");
      }
    } else updateOrderList([...orderList, topping]);
  }

  function errorMsg(error) {
    {
      error;
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }
  return (
    <>
      <h2 className="title">Ninja Turtles</h2>
      <h3 className="title">Order Pizza with the Turtles</h3>
      <div id="turtles-list">
        {turtles.map((turtle, i) => {
          return (
            <TurtleCard
              key={i}
              turtle={turtle}
              handleUpdatingOrders={handleUpdatingOrders}
            />
          );
        })}
      </div>
      <h5 className="title2">Our Orders: </h5>
      <div id="orders-list">
        {orderList.map((order, i) => {
          return <Orders key={i} order={order} isFull={isFull} />;
        })}
      </div>
      {error}
      {console.log(data)}
    </>
  );
}

export default App;
