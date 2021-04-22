import React, { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import "../Flashcard.css";

export default function Flashcard({ flashcard, onDelete, onToggle }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();

  return (
    <div className="flashcard-container">
      <div
        className={`card ${flip ? "flip" : ""}`}
        //style={{ height: height }}
        onClick={() => setFlip(!flip)}
      >
        <div className="front" ref={frontEl}>
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(flashcard.id)}
          />
          <div className="question-text">{flashcard.question}</div>
        </div>
        <div className="back" ref={backEl}>
          <div className="answer-text">{flashcard.answer}</div>
        </div>
      </div>
    </div>
  );
}
