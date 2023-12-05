import { useState, useReducer, useEffect } from "react";
import "./App.css";
import List from "./Components/List";
import AddNew from "./Components/AddNew";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  let localSList = [];

  useEffect(() => {
    localStorage.setItem("TODO-list", [...localSList, todoList]);
    localSList = localStorage.getItem("TODO-list");
  }, [todoList]);

  function addBtnHandle() {
    setTodoList([...todoList , {id: Math.random(), todo_text: inputValue , done: false}])
  }
  function deleteBtnHandle(id) {
    setTodoList(todoList.filter((todo) => todo.id != id))
  }
  function updateBtnHandle(id) {
    setTodoList(todoList.map((todo) => todo.id == id ? {...todo , done : 'true'} : todo))
  }
  return (
    <>
      <h1>TODO's</h1>
      <AddNew
        addBtnHandle={addBtnHandle}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <List
        todoList={todoList}
        updateBtnHandle={updateBtnHandle}
        deleteBtnHandle={deleteBtnHandle}
      />
    </>
  );
}

export default App;
