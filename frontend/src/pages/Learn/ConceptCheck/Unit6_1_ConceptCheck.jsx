import React, { useState } from "react";

export default function PronounConceptCheck() {
  const questions = [
    {
      id: 1,
      question:
        "The near demonstrative pronouns have stems that match their endings in terms of vowel class.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 2,
      question:
        "The far demonstrative pronouns decline like the personal pronouns.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 3,
      question: "Reflexive and reciprocal pronouns have no nominative forms.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 4,
      question: "Interrogative and indefinite pronouns have the same accents.",
      options: ["True", "False"],
      answer: "False",
    },
    {
      id: 5,
      question: "Possessive pronominal adjectives have third person forms.",
      options: ["True", "False"],
      answer: "False",
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(null);

  const handleChange = (id, value) => {
    setUserAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheck = () => {
    setShowAnswers(true);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] && userAnswers[q.id].trim() === q.answer.trim()) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowAnswers(true);
  };

  const handleClear = () => {
    setUserAnswers({});
    setShowAnswers(false);
    setScore(null);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Greek Pronoun Concepts Quiz</h2>

      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p>
            <strong>
              {q.id}. {q.question}
            </strong>
          </p>
          {q.options.map((opt) => (
            <div className="form-check" key={opt}>
              <input
                className="form-check-input"
                type="radio"
                name={`question-${q.id}`}
                id={`q${q.id}-${opt}`}
                value={opt}
                checked={userAnswers[q.id] === opt}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
              <label className="form-check-label" htmlFor={`q${q.id}-${opt}`}>
                {opt}
              </label>
            </div>
          ))}
          {showAnswers && (
            <p className="mt-2 text-success">Answer: {q.answer}</p>
          )}
        </div>
      ))}

      <div className="mb-5">
        <button className="btn btn-primary me-2" onClick={handleCheck}>
          Check Answers
        </button>
        <button className="btn btn-success me-2" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-secondary me-2" onClick={handleClear}>
          Clear
        </button>
      </div>

      {score !== null && (
        <div className="alert alert-info fs-2 fw-bold text-center">
          You got {score} out of {questions.length} correct!
        </div>
      )}
    </div>
  );
}
