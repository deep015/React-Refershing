// UserProvider.jsx
import { useState } from "react";
import { UserContext } from "./UserContext";



const UserProvider=({children})=>{

  const [user,setUser]=useState({name:"Deep"});

  const UpdateUser=(newName)=>{
    setUser({name:newName})
  }
  return (

    <UserContext.Provider value={{user,UpdateUser}}>
      {children}
    </UserContext.Provider>
  )

}

export default UserProvider ;








//Parent Container Component
// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({ name: "Deep" });

//   const updateUser = (newName) => {
//     setUser({ name: newName });
//   };

//   return (
//     <userContext.Provider value={{ user, updateUser }}>
//       {children}
//     </userContext.Provider>
//   );
// };

// export default UserProvider;




