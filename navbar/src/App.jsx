import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Test/>
    </>
  )
}

export default App
