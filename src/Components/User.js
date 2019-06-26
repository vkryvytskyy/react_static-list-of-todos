import React from 'react'
import {users} from '../Services/users'

function User(props) {
  const filteredUsers = [...users].filter(user => props.userId === user.id)
  return filteredUsers.map(user => {
    return (
      <td>
        {user.username}
      </td>
    )
  })

}

export default User