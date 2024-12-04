import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isLogin: false, // or true depending on the login state
  logIn: () => {}, // function to log in
  logOut: () => {}, // function to log out
});

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  // On mount, check if the user is already logged in
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLogin");
    if (storedLoginState === "true") {
      setIsLogin(true);
    }
  }, []);

  const logIn = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", "true"); // Store in localStorage
  };

  const logOut = () => {
    setIsLogin(false);
    localStorage.setItem("isLogin", "false"); // Store in localStorage
  };

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
