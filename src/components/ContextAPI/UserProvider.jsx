// UserProvider.jsx
import { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Deep" });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <userContext.Provider value={{ user, updateUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
