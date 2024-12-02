import Tabs from './Components/Tabs'
import ToDoCard from './Components/ToDoCard'
import ToDoInput from './Components/ToDoInput'
import ToDoList from './Components/ToDoList'
import Header from './Components/Header'

import { useState, useEffect } from 'react'

export default function App() 
{
  /* const todos = [
     { input: "Make breakfast!", complete: true },
     { input: "Get the groceries!", complete: false },
     { input: "Learn how to web design", complete: false },
     { input: "Workout in 6pm!", complete: true },
   ];*/

   const [todos, setTodos] = useState([])

   const [selectedTab, setSelectedTab] = useState("All")

   function handleAddToDo(newToDo)
   {
      const newToDoList = [...todos, {input: newToDo, complete: false}]
      setTodos(newToDoList)
      handleSaveData(newToDoList)
   }  
   function handleCompleteToDo(index)
   {//update/edit/modify
      let newToDoList = [...todos]
      let completedTodo = todos[index]
      completedTodo['complete'] = true
      newToDoList[index] = completedTodo
      setTodos(newToDoList)
      handleSaveData(newToDoList)
   }
   function handleDeleteToDo(index)
   {
     let newToDoList = todos.filter((val, valIndex) => {
        return valIndex !== index
     })
     setTodos(newToDoList)
     handleSaveData(newToDoList)
   }
   function handleSaveData(currData)
   {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currData }))
   }

   useEffect( () => {
     if(!localStorage || !localStorage.getItem("todo-app")) 
      { return }
       let db = JSON.parse(localStorage.getItem("todo-app"))
       setTodos(db.todos)
   }, [])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <ToDoList handleDeleteToDo={handleDeleteToDo} handleCompleteToDo={handleCompleteToDo} todos={todos} selectedTab={selectedTab}/>
      <ToDoInput handleAddToDo={handleAddToDo}/>
      <></>
    </>
  )
}

