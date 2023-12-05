import React from 'react'
import './style.css'

export default function AddNew({addBtnHandle , inputValue , setInputValue}) {
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={ () => {addBtnHandle(inputValue); setInputValue("")}}>Add</button>
    </div>
  )
}
