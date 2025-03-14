import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculater from './calculater/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculater/>
    </>
  )
}

export default App
