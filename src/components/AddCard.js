import { useState, useEffect, useRef } from "react";
import "../AddCard.css";

const AddCard = ({ onAdd }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState([]);

  const subjectEl = useRef();

  const fetchSubjects = async () => {
    return await fetch("/api/subject")
      .then((response) => response.json())
      .then((data) => {
        setSubject(data);
      });
  };

  useEffect(() => fetchSubjects(), []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!Text) {
      alert("Please add a card");
      return;
    }

    onAdd({ question, answer, subject: subjectEl.current.value });

    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="form-popup" class="form-container">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Question</label>
          <input
            type="text"
            placeholder="Add Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Answer</label>
          <input
            type="text"
            placeholder="Add Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Subject</label>
          <select ref={subjectEl}>
            {subject.map((subject) => {
              return (
                <option value={subject.url} key={subject.id}>
                  {subject.name}
                </option>
              );
            })}
          </select>
        </div>
        <input type="submit" value="Save Card" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCard;
