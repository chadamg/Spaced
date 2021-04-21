import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import CardsPage from './components/CardsPage';
// import React, { useState, useEffect, useRef } from 'react';
import FlashcardPage from './components/FlashcardPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import FetchModular from './components/fetch/useFetch';
import UseToken from './components/fetch/Fetch';

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
          <h1>Spaced</h1>
            <Switch>
              <Route path="/login" render={(props) => (
                <SignIn {...props} setToken={setToken} />
              )}
              />
              <Route path="/register" render={(props) => (
                <SignUp {...props} setToken={setToken} />
              )}
              />
              <Route path="/cards">
                {!token ? <Redirect to="/login" /> : <FlashcardPage />}
              </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
