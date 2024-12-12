import { useState } from "react"

const TodoInput = (props) => {
    const {handleAddTodos, todoValue, setTodoValue}=props
    
  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} placeholder="Enter Todo..." />
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue("")
        }}> Add </button>
    </header>
  )
}

export default TodoInput