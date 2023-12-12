import React from 'react'
import useCounter from '../hooks/useCounter'
import { useState } from 'react'

export default function CheckAmount() {
    const [inputValue , setInputValue] = useState(0)
    const {count , plus , minus , multiply , dividedBy} = useCounter(0)
  return (
    <div>
        <h1 id={count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero'}>{count}</h1>
        <input type="number"  onChange={(e) => setInputValue(e.target.value)}/>
        <br />
        <button onClick={() => plus(inputValue)}>+</button>
        <button onClick={() => minus(inputValue)}>-</button>
        <button onClick={() => multiply(inputValue)}>*</button>
        <button onClick={() => dividedBy(inputValue)}>/</button>
    </div>
  )
}
