import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const logIn = () => setIsLogin(true);
    const logOut = () => setIsLogin(false);

    return (
    <AuthContext.Provider value={{ isLogin, logIn, logOut }}>
        {children}
    </AuthContext.Provider>
    );
};