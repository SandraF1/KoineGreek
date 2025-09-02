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
  const [checked, setChecked] = useState(false); // For "Check Answers"

  const handleAnswer = (id, value) => {
    if (!submitted) {
      setAnswers((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) correctCount++;
    });
    setScore(correctCount);
    setSubmitted(true);
    setChecked(true); // show answers when submitting
  };

  const handleClear = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setChecked(false);
  };

  const handleCheck = () => {
    setChecked(true);
  };

  const getButtonClass = (q, value) => {
    if (!checked) {
      return answers[q.id] === value
        ? "btn btn-warning me-2"
        : "btn btn-outline-primary me-2";
    }
    // After checking or submitting
    if (value === q.correct) return "btn btn-success me-2"; // correct answer
    if (answers[q.id] === value && value !== q.correct)
      return "btn btn-danger me-2"; // wrong selection
    return "btn btn-outline-secondary me-2"; // unselected, not correct
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
              <button
                key={opt}
                type="button"
                className={getButtonClass(q, value)}
                onClick={() => handleAnswer(q.id, value)}
                disabled={submitted} // buttons disabled after submission
              >
                {opt}
              </button>
            );
          })}
        </div>
      ))}

      <div className="mt-3">
        <button
          className="btn btn-info me-2"
          onClick={handleCheck}
          disabled={checked}
        >
          Check Answers
        </button>
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
        <div className="mt-3 text-center">
          <h3 className="display-5 fw-bold">
            Score: {score} / {questions.length}
          </h3>
        </div>
      )}
    </div>
  );
}
