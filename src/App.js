import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardsPage from './components/CardsPage';
import React, { useState } from 'react';
import SignIn from './components/SignIn';
import useToken from './components/useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return (
      <SignIn setToken={setToken} />
    ) 
  }

  return (
    <div>
      <h1>Application</h1>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <CardsPage />
          </Route>
          <Route path="/preferences">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
