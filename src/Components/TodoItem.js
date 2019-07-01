import React from 'react'
import User from '../Components/User'
import { users } from '../Services/users'

function TodoItem(props) {
    return (
    <tr className="TodoItem">
      <td className="id">{props.todoData.id}</td>
      <td className="title">{props.todoData.title}</td>
      <td className={props.todoData.completed ? 'itemCompleted' : 'itemActive'}>{props.todoData.completed ? 'completed' : 'active'}</td>
        {
          users
            .filter(user => {
              return user.id === props.todoData.userId
            })
          .map((user, index) => {
          return (
            <User userData={user} key={index}/>
        )
      })}
      
    </tr>
      
    )

}

export default TodoItem