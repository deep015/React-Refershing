import React, { useContext, useState } from 'react';
import { userContext } from './UserProvider';

const UpdateUser = () => {
  const { updateUser } = useContext(userContext); // ✅ fixed here
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName); // ✅ just pass the name string
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
