import React, { useState } from "react";

export default function PronounConceptCheck() {
  const questions = [
    {
      id: 1,
      question: "What is the use of the Greek third person personal pronoun?",
      options: [
        "To replace a noun or noun group",
        "To intensify a noun or the subject of a verb",
        "To mean ‘the same’",
        "To emphasise or contrast",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      id: 2,
      question:
        "True or False: Personal pronouns do not carry gender in the 1st and 2nd person.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 3,
      question:
        "True or False: All 2nd person singular personal pronouns have a sigma at their beginning.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 4,
      question:
        "True or False: The neuter relative pronouns have the same endings as the second declension neuter nouns.",
      options: ["True", "False"],
      answer: "False",
    },

    {
      id: 5,
      question:
        "What differentiates the nominative singular feminine relative pronoun from the nominative singular feminine article?",
      options: [
        "The rough breathing mark",
        "The accent",
        "Both the rough breathing mark and the accent",
      ],
      answer: "The accent",
    },
    {
      id: 6,
      question:
        "True or False: The neuter relative pronoun is almost identical to the masculine article, except that the neuter relative pronoun carries an accent.",
      options: ["True", "False"],
      answer: "True",
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
      <h2 className="mb-4">Greek Pronouns & Relative Pronouns Quiz</h2>

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
