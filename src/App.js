  
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ROUTES from "./routes";
import React from 'react';

import Home from './pages/home';
import Welcome from './pages/welcome';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.welcome} component={Welcome} />
        <Redirect to={ROUTES.home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;