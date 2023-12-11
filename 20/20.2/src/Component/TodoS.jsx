import { Component } from "react";
import './style.css'

class TodoS extends Component {
  constructor() {
    super();
    this.state = {
      todoS: [
        { id: 0, name: "CSS", completed: true },
        { id: 1, name: "JavaScript", completed: true },
        { id: 2, name: "Learn React", completed: false },
        { id: 3, name: "Learn mongoDB", completed: false },
        { id: 4, name: "Learn Node JS", completed: false },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.state.todoS.map((todo) => (
          <div key={todo.id}>
            <span id={todo.completed ? "completed" : "not"}>{todo.name}</span>
            <button
              onClick={() => {
                this.setState((current) => {
                  const newArray = current.todoS.map((t, i) => {
                    return i == todo.id ? { ...t, completed: !t.completed } : t;
                  });
                  console.log(current.todoS);
                  return {
                    todoS: newArray,
                  };
                });
              }}
            >
              {todo.completed ? <span>&#10004;</span> : <span>&#10006;</span>}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default TodoS;
