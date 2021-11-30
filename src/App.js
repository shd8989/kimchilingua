import './App.css';
import Index from './component/index';
import Admin from './component/admin/index';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes, useRoutes} from "react-router-dom";

const AppComponent = () => {
  let routes = useRoutes([
    { path: "/", element: <Index /> },
    { path: "/admin", element: <Admin /> },
    { path: "*", element: <h2>404 Not Found </h2> }
  ]);
  return routes;
};

function App() {
  return (
    <>
      <Router>
          <AppComponent />
      </Router>
    </>
  );
}

export default App;
