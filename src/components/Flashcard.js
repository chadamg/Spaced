import React, { useState, useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa';

export default function Flashcard({ flashcard, onDelete, onToggle }) {
  
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div className="flashcard-wrapper">
      <div
        className={`card ${flip ? 'flip' : ''}`}
        style={{ height: height }}
        onClick={() => setFlip(!flip)}
      >
        <div className="front" ref={frontEl}>
          {flashcard.question}
          <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(flashcard.id)} />
        </div>
        <div className="back" ref={backEl}>{flashcard.answer}</div>
      </div>
    </div>
  )
}