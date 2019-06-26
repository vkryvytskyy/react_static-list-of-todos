import React from 'react'
import TodoItem from './TodoItem'
import { todos } from '../Services/todos'

function TodoList(props) {

  return (
      <tbody>
      <TodoItem
        todos={todos}
      />
      </tbody>
  )
}

export default TodoList