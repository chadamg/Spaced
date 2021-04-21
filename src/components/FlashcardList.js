import React from 'react'
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards, onDelete, onToggle, onAdd }) {

  return (
    <div className="card-grid">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} onDelete={onDelete} onToggle={onToggle} />
      })}
      <button type="button" onClick={onAdd} >Add Card</button>
    </div>
  )
}