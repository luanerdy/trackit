import React from 'react';
import Login from './components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
