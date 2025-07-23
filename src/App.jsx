import React from 'react';
import UserProvider from './components/ContextAPI/UserProvider';
import UserProfile from './components/ContextAPI/UserProfile';
import UpdateUser from './components/ContextAPI/UpdateUser';

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default App;
