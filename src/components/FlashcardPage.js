import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashcardList';

const FlashcardPage = () => {
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

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Subject</label>
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
  )
}

export default FlashcardPage