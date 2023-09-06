import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import {Link} from 'react-router-dom';
import LoginContext from '../../loginContext';

const Navigation = (props) => {
  const ctx =useContext(LoginContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <Link to="/User">Users</Link>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Link to="/Admin">Admin</Link>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
