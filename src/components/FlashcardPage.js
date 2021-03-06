import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "./FlashcardList";
import UseToken from "./fetch/Fetch";
import AddCard from "./AddCard";
import { useGlobalContext } from "./StudyModalContext";
import Scroller from "./StudyCardScroller";
import "../Flashcard.css";
import Button from "./Button";

const FlashcardPage = ({ onAdd, showAdd }) => {
  const { token } = UseToken();
  const [flashcards, setFlashcards] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [showAddCard, setShowAddCard] = useState(false);

  const subjectEl = useRef();

  const fetchSubjects = async () => {
    return await fetch("/api/subject")
      .then((response) => response.json())
      .then((data) => {
        setSubjects(data);
      });
  };

  useEffect(() => fetchSubjects(), []);

  async function handleSubmit(e) {
    e.preventDefault();
    return await fetch(
      "/api/card?" +
        new URLSearchParams({
          subject__name: subjectEl.current.value,
        }),
      {
        method: "GET",
        headers: {
          Authorization: "Token " + token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFlashcards(
          data.map((questionItem, index) => {
            return {
              id: questionItem.id,
              question: questionItem.question,
              answer: questionItem.answer,
            };
          })
        );
      });
  }

  const addCard = async (card) => {
    const res = await fetch("/api/card/", {
      method: "POST",
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
    const data = await res.json();
    setFlashcards([...flashcards, data]);
  };

  const deleteCard = async (id) => {
    await fetch(`/api/card/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Token " + token,
      },
    });
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
  };

  const { openModal } = useGlobalContext();

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject" ref={subjectEl}>
            {subjects.map((subject) => {
              return (
                <option value={subject.name} key={subject.id}>
                  {subject.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <button className="btn">Search</button>
        </div>
        <div className="form-group">
          <button onClick={openModal} className="btn">
            Study
          </button>
        </div>
        <div className="form-group">
          <Button
            color={showAdd ? "red" : "steelblue"}
            text={showAdd ? "Close" : "Add Card"}
            onClick={onAdd}
          />
        </div>
      </form>
      <div className="form-group">{showAdd && <AddCard onAdd={addCard} />}</div>
      <div className="card-page-container">
        <FlashcardList flashcards={flashcards} onDelete={deleteCard} />
      </div>
    </>
  );
};

export default FlashcardPage;
