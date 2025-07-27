import React from 'react';
import UserProvider from './components/ContextAPI/UserProvider';
import UserProfile from './components/ContextAPI/UserProfile';
import UpdateUser from './components/ContextAPI/UpdateUser';
import CounterApp from './components/UseReducerHook/CounterApp';
import RegisterForm from './components/CustomHook/RegisterForm';

import Game from './components/RPS-Game/Components/Game';

const App = () => {
  return (
    /*<UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>*/

   /* <CounterApp />*/

   <Game />
  );
};

export default App;
