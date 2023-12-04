import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {

  const inputRef = useRef("")

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </>
  )
}

export default App
