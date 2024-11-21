import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import routes from "./routes/routes-page";

function App() {
  return (
    <div>
      <Navbar />
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
  );
}

export default App;
