import { useState, useEffect,createContext } from "react";

const LoginContext = createContext<{
  isLoggedIn: boolean;
  onLogout:()=> void;
  onLogin:(email:string, password:string)=>void;
}>({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email:string, password:string) => {},
});

export const LoginContextProvider: React.FC<{
  children: React.ReactNode;}>= (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email:string, password:string) => {
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
