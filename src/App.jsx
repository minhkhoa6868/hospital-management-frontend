import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, Fragment } from "react";
import './App.css';

import SideNav from "./components/SideNav/SideNav"
import routes from "./routes/routes-page";
import { AuthProvider, AuthContext } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AuthContext.Consumer>
          {({ isLogin }) => isLogin && <SideNav />}
        </AuthContext.Consumer>
        {/* {isLogin && <SideNav/>} */}
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              const Layout = route.layout ? route.layout : Fragment;
              const Page = route.component;
              return (
                  <Route
                      key={index}
                      path={route.path}
                      element={
                          <Layout>
                              <Page />
                          </Layout>
                      }
                  />
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
