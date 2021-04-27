  
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ROUTES from "./routes";
import React from 'react';
import './App.css';
import Home from './pages/home';
import Welcome from './pages/welcome';
import Navbar from './components/Navbar';
import { useAuth } from "./firebase/provider";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.welcome} component={Welcome} />
        <Redirect to={ROUTES.home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;