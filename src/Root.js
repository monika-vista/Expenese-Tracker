import React, {  useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import LoginContext from './loginContext';

function Root() {
  const ctx =useContext(LoginContext)

  return (
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
      </main>
  );
}

export default Root;
