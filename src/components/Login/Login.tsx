import React, { useContext, useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import LoginContext from '../../loginContext';

const Login:React.FC = () => {

  const ctx =useContext(LoginContext)
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event
    :React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  useEffect (()=>{
    const identifier = setTimeout(()=>{
      console.log('checking form validity');
      setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
    },500)
    return ()=>{clearTimeout(identifier)}
  },[enteredEmail,enteredPassword])

  const passwordChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ctx.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid} onclick={()=>{}}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
