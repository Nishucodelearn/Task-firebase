import { useState, useRef , useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [alertstatus, setAlertStatus] = useState(false);
  const [Todos, setTodos] = useState([]);

// fetching data from firebase

useEffect(()=>{

  fetch('https://tasktodos-2a764-default-rtdb.firebaseio.com/tasktodo.json').then((firebase_data)=>{
    return firebase_data.json()}).then((firebase_data)=>{
      console.log(firebase_data)
      console.log("All the firebase data")
      let tempTodos=[]
        for(let key in firebase_data){
       let currTodos={
        id:key,
        ...firebase_data[key]
       }
       tempTodos.push(currTodos);
       console.log("tem function")
      }
      setTodos(tempTodos);
      console.log("set todos function")
    });

},[])




// upload data on firebase
  const title = useRef();
  const des = useRef();

  function addHandler() {
    let currenttodo = {
      Title: title.current.value,
      Des: des.current.value,
    };

    fetch("https://tasktodos-2a764-default-rtdb.firebaseio.com/tasktodo.json", {
      method: "POST",
      body: JSON.stringify(currenttodo),
    }).then(() => {
      setAlertStatus(true);
    });
  }

function closeHandler(){
  setAlertStatus(false);
}


  return (
    <>
      <div className={alertstatus == true ? "alert" : "d-none"}>
        Added successfully !{" "}
        <svg onClick={closeHandler}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </div>

      <div className="container">
        <div className="todo">
          <h1>Create your list📝</h1>
          <p>
            Createeyou any list like home list, shopping list, specific day, any
            memory, daily day how it is.{" "}
          </p>
          <input ref={title} type="text" placeholder="Title🐵🐵" />
          <textarea
            ref={des}
            placeholder="Write in details"
            rows="8"
            cols="62"
          ></textarea>
          <button className="btn-add" onClick={addHandler}>
            Add😎
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
