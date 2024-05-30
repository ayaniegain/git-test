import { useState } from 'react'
import './App.css'
import Customer from './Customer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
    Hello Ayan
  </h1>
  <Customer/>
   
    </>
  )
}

export default App
