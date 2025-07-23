import React, { useContext } from 'react'
import { userContext } from './UserProvider'
const UserProfile = () => {

    const {user} =useContext(userContext)

  return (
    <div>
        <h1>UserProfile</h1>
        <h2> Name :{user.name}</h2>
    </div>
  )
}

export default UserProfile