import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CardsPage from './components/CardsPage';
import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UseToken from './components/fetch/Fetch';

function App() {

  const { token, setToken } = UseToken();

  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()

  const fetchCategories = async () => {
    return await fetch('/api/subject')
        .then(response => response.json())
        .then(data => {
            setCategories(data)
        });
  }

  useEffect( () => fetchCategories()
  , []);

  async function handleSubmit(e) {
    e.preventDefault()
    return await fetch('/api/card?'+ new URLSearchParams({
      subject__name: categoryEl.current.value
    }))
    .then(res => res.json())
    .then(data => {
      setFlashcards(data.map((questionItem, index) => {
        
          return {
          id: questionItem.id,
          question: questionItem.question,
          answer: questionItem.answer
          }
        
        
      }))
    })
  }

  // if(!token) {
  //   return (
  //     <SignUp setToken={setToken} />
  //   ) 
  // }

  return (
    <>
      <div>
        <h1>Application</h1>
        <Router>
          <Switch>
            <Route path="/dashboard">
            </Route>
            <Route path="/preferences">
            </Route>
          </Switch>
        </Router>
      </div>

      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.name} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <button className="btn">Search</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;
