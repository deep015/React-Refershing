import React, { useContext } from 'react'
import { UserContext } from './UserContext';


/*here we read the data from the Parent component 
using the UseContext Hook */
const UserProfile = () => {
   
  const {user} = useContext(UserContext)

  return (
    <div>
      <h1>User Profile :</h1>
      <h2>Name:{user.name}</h2>
    </div>
  )
}

export default UserProfile;













// const UserProfile = () => {

//     const {user} =useContext(userContext)

//   return (
//     <div>
//         <h1>UserProfile</h1>
//         <h2> Name :{user.name}</h2>
//     </div>
//   )
// }

// export default UserProfile