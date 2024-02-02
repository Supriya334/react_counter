import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function Inc(){
  setCount(count+1)
}

  return (

    <>
      <h1>{count}</h1>
      <button onClick={Inc}>Increase Count</button>
    </>
  )
}

export default App
