// src/pages/Learn/ConceptCheckUnit2.jsx
import React, { useState } from "react";

export default function ConceptCheckUnit2() {
  const questions = [
    {
      id: 1,
      text: "Greek nouns are either singular or plural.",
      correct: true,
    },
    {
      id: 2,
      text: "The nominative case is the subject of a sentence. It is the doer of the verbal action.",
      correct: true,
    },
    {
      id: 3,
      text: "The accusative case is for something directly affected by the verbal action. For example, in the sentence, ‘Al gave John a gift’, the word ‘gift’ is directly affected by the verbal action.",
      correct: true,
    },
    {
      id: 4,
      text: "Many Greek feminine nouns following the regular first declension pattern have hybrid endings if their last consonant is a ς or ξ. They will have case endings in alpha in the singular and eta in the plural.",
      correct: true,
    },
    {
      id: 5,
      text: "Greek feminine nouns following the first declension pattern with case endings in alpha have ambiguous genitive singular and accusative plural forms, when not accompanied by the article.",
      correct: true,
    },
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) correctCount++;
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleClear = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };



  return (
    <div className="container my-4">
      <h2>Concept Check – Unit 2</h2>
      <p>Select True or False for each question:</p>

      {questions.map((q) => (
        <div key={q.id} className="mb-3 p-3 border rounded">
          <p>{q.text}</p>
          {["True", "False"].map((opt) => {
            const value = opt === "True";
            return (
              <div key={opt} className="form-check form-check-inline">
                <input
                  className={getButtonClass(q, value)}
                  type="radio"
                  name={`question-${q.id}`}
                  id={`question-${q.id}-${opt.toLowerCase()}`}
                  value={value}
                  checked={answers[q.id] === value}
                  onChange={() => handleAnswer(q.id, value)}
                  disabled={submitted}
                />
                <label
                  className="form-check-label"
                  htmlFor={`question-${q.id}-${opt.toLowerCase()}`}
                >
                  {opt}
                </label>
              </div>
            );
          })}
          {submitted && (
            <div className="mt-2">
              {answers[q.id] === q.correct ? (
                <span className="text-primary">Correct ✅</span>
              ) : (
                <span className="text-warning">Incorrect ⚠️</span>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={handleSubmit}
          disabled={submitted}
        >
          Submit
        </button>
        <button className="btn btn-secondary" onClick={handleClear}>
          Clear
        </button>
      </div>

      {submitted && (
        <div className="mt-3">
          <h5>
            Score: {score} / {questions.length}
          </h5>
        </div>
      )}
    </div>
  );
}
