import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  isLogin: false, // or true depending on the login state
  logIn: () => {}, // function to log in
  logOut: () => {}, // function to log out
});

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const logIn = () => setIsLogin(true);
  const logOut = () => setIsLogin(false);

  const authContextValue = {
    isLogin,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
