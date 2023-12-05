import { useState, useReducer, useEffect } from "react";
import "./App.css";
import List from "./Components/List";
import AddNew from "./Components/AddNew";

// crud reference actions
const ADD_TODO = "add-todo";
const UPDATE_TODO = "update-todo";
const DELETE_TODO = "delete-todo";

function todoReducer(state, action) {
  const { type } = action;
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Math.random(), todo_text: action.payload, done: false },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id == action.payload ? { ...todo, done: true } : todo
      );
    default:
      break;
  }
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, dispatch] = useReducer(todoReducer, []);

  let localSList = [];
  useEffect(() => {
    localStorage.setItem("TODO-list", [...localSList, todoList]);
    localSList = localStorage.getItem("TODO-list");
  }, [todoList]);

  function addBtnHandle() {
    dispatch({ payload: inputValue, type: ADD_TODO });
  }
  function deleteBtnHandle(id) {
    dispatch({ payload: id, type: DELETE_TODO });
  }
  function updateBtnHandle(id) {
    dispatch({ payload: id, type: UPDATE_TODO });
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
