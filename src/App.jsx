import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, Fragment, useContext } from "react";
import "./App.css";

import SideNav from "./components/SideNav/SideNav";
import routes from "./routes/routes-page";
import { AuthProvider, AuthContext } from "./context/AuthContext";

{
  /* <AuthContext.Consumer>
          {({ isLogin }) => isLogin && <SideNav />}
        </AuthContext.Consumer> */
}

function App() {
  const authContext = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        {authContext.isLogin && <SideNav />}
        {/* {isLogin && <SideNav/>} */}
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
  );
}

export default App;
