import React, { useContext } from 'react'
import { userContext } from './UserProvider'

const Child = () => {
 
    const user = useContext(userContext)
  return (
   <h1>hi i am {user}</h1>
  )
}

export default Child