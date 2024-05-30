import { useState } from 'react'
import './App.css'
import Jobportal from './Jobportal'
import Customer from './Customer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
    Hello MAster 
    </h1>
  <Customer/>

  <span className='text-red-400 text-xl'> master component</span>
    Hello mohit
  <Customer/>
  <h2 className='text-green-500 text-2xl'>  new component</h2>
   
   <Jobportal/>
    </>
  )
}

export default App
