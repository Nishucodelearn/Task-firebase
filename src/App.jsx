import { useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState(0)

const title=useRef();
const des=useRef();

function addHandler(){

  const todo = {
 Title:title.current.value,
 Des:des.current.value
  }
  console.log(todo);

}

  return (
    <>
    <div className="container">
      <div className="todo">
        <h1>
          Create your list📝
        </h1>
        <p >Createeyou any list like home list, shopping list, specific day, any memory, daily day how it is. </p>
        <input ref={title} type="text" placeholder='Title🐵🐵' />
        <textarea ref={des} placeholder='Write in details' rows='8' cols='62'></textarea>
        <button className="btn-add" onClick={addHandler}>Add😎</button>
      </div>
    </div>
    </>
  )
}

export default App
