import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import CardsPage from './components/CardsPage';
// import React, { useState, useEffect, useRef } from 'react';
import FlashcardPage from './components/FlashcardPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import FetchModular from './components/fetch/useFetch';
import UseToken from './components/fetch/Fetch';
import LandingPage from './components/LandingPage';
import Navbar from './components/LandingPageComponents/navbar/Navbar';
import Footer from './components/LandingPageComponents/footer/index'


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
            <Navbar />
              <Route exact path="/" component={LandingPage} />

              <Route exact path="/login" render={(props) => (
                <SignIn {...props} setToken={setToken} />
              )}>
              </Route>
              <Route exact path="/register" render={(props) => (
                <SignUp {...props} setToken={setToken} />
              )}
              />
              <Route exact path="/cards">
                {!token ? <Redirect to="/login" /> : <FlashcardPage />}
              </Route>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
