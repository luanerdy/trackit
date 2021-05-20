import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/cadastro" exact>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
