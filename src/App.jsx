import { useState } from 'react'
import './App.css'
import Jobportal from './Jobportal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
    Hello Ayan
    </h1>
  <Customer/>
   
   <Jobportal/>
    </>
  )
}

export default App
