import { useState, useEffect,createContext } from "react";

const LoginContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const LoginContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(()=>{
    const loginStatus = localStorage.getItem('isLoggedIn');
    if(loginStatus ==='1'){
      setIsLoggedIn(true);
    }
  },[])

  return (
    <LoginContext.Provider
      value ={
        {
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler
        }
      }
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
