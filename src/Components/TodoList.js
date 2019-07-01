import React from "react";
import TodoItem from "./TodoItem";
import { todos } from "../Services/todos";

function TodoList(props) {
  return (
    <table className="App">
      <thead>
        <tr className="tableHead">
          <th>id</th>
          <th>title</th>
          <th>completed</th>
          <th>username</th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map((todo, index)=> {
            return (
              <TodoItem todoData={todo} key={index}/>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default TodoList;
