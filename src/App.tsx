import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="text-center bg-secondary text-primary font-semibold mt-10">
      Tailwind CSS is working with React + TS + Vite!
    </div>
  )
}

export default App
