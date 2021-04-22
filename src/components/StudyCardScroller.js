import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";

function Scroller() {
  const [cards, setCards] = useState(data);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const lastIndex = cards.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, cards]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span></span>Question
        </h2>
      </div>
      <div className="section-center">
        {cards.map((card, cardIndex) => {
          const { id, question, answer } = card;

          let position = "nextSlide";
          if (cardIndex === index) {
            position = "activeSlide";
          }
          if (
            cardIndex === index - 1 ||
            (index === 0 && cardIndex === cards.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
            <section className="card" onClick={() => setShowAnswer(!showAnswer)}>
              
              {!showAnswer ? <p className="title" >{question}</p> : <p className="title">{answer}</p>}
            </section>
            </article>
          );
        })}
        <button className="prev" onClick={() => {setIndex(index - 1);setShowAnswer(false)}}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => {setIndex(index + 1);setShowAnswer(false)}}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Scroller;
