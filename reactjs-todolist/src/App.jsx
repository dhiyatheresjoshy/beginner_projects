import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
 
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo){
    const newTodosList =[...todos,newTodo]
    persistData(newTodosList)
    setTodos(newTodosList)
  }

  function handleDeleteTodo(index){
    const newTodosList = todos.filter((todo, todoIndex) => {
      return todoIndex!==index
    })
    persistData(newTodosList)
    setTodos(newTodosList)
  }
  
  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList  handleEditTodo={handleEditTodo} todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
