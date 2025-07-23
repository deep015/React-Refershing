
//UPDATE THE USERDATA

import React, { useContext,useState } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {

  const {UpdateUser} = useContext(UserContext)

  const [newName,setNewName]=useState('')
   
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(newName.trim()){
      UpdateUser(newName);
      setNewName('')
    }
  }
  return (
    <div>
      <h2>Update User </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
         type="text" 
         value={newName}
        onChange={(e)=>setNewName(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateUser