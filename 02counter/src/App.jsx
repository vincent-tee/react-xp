import { useState } from 'react'

import './App.css'

function App() {
  
 const [counter, setCounter] = useState(1)

  const addValue = () => {
    setCounter(counter + 1);
    console.log("New Value: " + counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("New Value: " + counter)
  }
  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value: </h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Reduce</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
