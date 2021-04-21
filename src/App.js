import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import CardsPage from './components/CardsPage';
// import React, { useState, useEffect, useRef } from 'react';
import FlashcardPage from './components/FlashcardPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import FetchModular from './components/fetch/useFetch';
import UseToken from './components/fetch/Fetch';
import LandingPage from './components/LandingPage';

function App() {

  const { token, setToken } = UseToken();

  

  // if(!token) {
  //   return (
  //     <SignUp setToken={setToken} />
  //   ) 
  // }

  return (
      // <FetchModular />

    
      <Router>
        <div>
              <Route path="/" component={LandingPage} />
              <Route path="/login" render={(props) => (
                <SignIn {...props} setToken={setToken} />
              )}>
                {token ? <Redirect to="/cards" /> : <SignIn />}
              </Route>
              <Route path="/register" render={(props) => (
                <SignUp {...props} setToken={setToken} />
              )}
              />
              <Route path="/cards">
                {!token ? <Redirect to="/login" /> : <FlashcardPage />}
              </Route>
              
        </div>
      </Router>
  );
}

export default App;
