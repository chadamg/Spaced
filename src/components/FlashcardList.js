import React from "react";
import Flashcard from "./Flashcard";
import Button from "./Button";
import "../Flashcard.css";

export default function FlashcardList({
  flashcards,
  onDelete,
  onToggle,
  onAdd,
  showAdd,
}) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return (
          <Flashcard
            flashcard={flashcard}
            key={flashcard.id}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
}
