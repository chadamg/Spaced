import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import FlashcardPage from "./components/FlashcardPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UseToken from "./components/fetch/Fetch";
import LandingPage from "./components/LandingPage";
// import Accordion from "./components/FAQComponents/About";
import Navbar from "./components/LandingPageComponents/navbar/Navbar";
import Footer from "./components/LandingPageComponents/footer/index";
import Modal from "./components/StudyModal";

function App() {
  const { token, setToken } = UseToken();
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/about" component={Accordion} /> */}
        <Route
          exact
          path="/login"
          render={(props) => <SignIn {...props} setToken={setToken} />}
        ></Route>

        <Route
          exact
          path="/register"
          render={(props) => <SignUp {...props} setToken={setToken} />}
        />

        <Route exact path="/cards">
          {!token ? (
            <Redirect to="/login" />
          ) : (
            <FlashcardPage
              onAdd={() => setShowAddCard(!showAddCard)}
              showAdd={showAddCard}
            />
          )}
        </Route>
        <Modal />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
