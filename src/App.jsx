import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="todo">
        <h1>
          Create your list📝
        </h1>
        <p>Createe you any list like home list, shopping list, specific day, any memory, daily day how it is. </p>
        <input type="text" placeholder='Title🐵🐵' />
        <textarea placeholder='Write in details'></textarea>
        <button className="btn-add">Add😎</button>
      </div>
    </div>
    </>
  )
}

export default App
