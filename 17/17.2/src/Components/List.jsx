import React from 'react'
import './style.css'
export default function List({todoList , deleteBtnHandle , updateBtnHandle}) {

  return (
    <ul id='list'>
        {todoList.map((todo , i ) => {
            return (
                <div className='todo-card'  key={i}>
                    <button onClick={ () => updateBtnHandle(todo.id)}>{todo.done ? <span>&#10004;</span> :<span>&#10006;</span>}</button>
                    <li> - {todo.todo_text}</li>
                    <button onClick={() =>deleteBtnHandle(todo.id)}>Delete</button>
                </div>
            )
        })}

    </ul>
  )
}
