import React from 'react'

export default function Counter({count , increasing}) {
  return (
    <div>
        <button onClick={() => increasing(count + 1)}>Increment</button>
        <h2>{count}</h2>
    </div>
  )
}
