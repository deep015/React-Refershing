import React from 'react';
import UserProvider from './components/ContextAPI/UserProvider';
import UserProfile from './components/ContextAPI/UserProfile';
import UpdateUser from './components/ContextAPI/UpdateUser';
import CounterApp from './components/UseReducerHook/CounterApp';

const App = () => {
  return (
    /*<UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>*/

    <CounterApp />
  );
};

export default App;
