import { useState } from 'react'
import './App.css'
import InputContainer from './Component/InputContainer'
import TodolistContainer from './Component/TodolistContainer'
function App(){
  const [inputval,setinputval]=useState('')
  const[inputTodo,setToDo]=useState([])
  function WriteToDo(e){
    setinputval(e.target.value)
    console.log(e.target.value)
  }
  function addToDo(){
    if(inputval!=''){
      setToDo((prev)=>[...prev,inputval])
      setinputval('')
    }
  }
  // console.log(inputTodo)

  function delteDoto(todoindex){
    setToDo((pretodo)=>pretodo.filter((prevtodo,previndex)=>{
      console.log("preindex",previndex)
      console.log("prevtodo",pretodo)
      console.log("todoindex",todoindex)
      return previndex!=todoindex 
    }))
    
  }
  
  return(
  <main>
    <InputContainer inputval={inputval} WriteToDo={WriteToDo} AddToDo={addToDo}/>
    <TodolistContainer ToDolist={inputTodo} deleteTodo={delteDoto}/>
  </main>
  )
}

export default App
