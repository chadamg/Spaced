import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardsPage from './components/CardsPage';
import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import StickyFooter from './components/Footer';
import UseToken from './components/fetch/Fetch';

function App() {

  const { token, setToken } = UseToken();

  if(!token) {
    return (
      <SignUp setToken={setToken} />
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
