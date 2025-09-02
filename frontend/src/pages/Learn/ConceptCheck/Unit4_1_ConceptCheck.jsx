import React, { useState } from "react";

export default function ThirdDeclensionQuiz() {
  const questions = [
    {
      id: 1,
      question:
        "True or False: The feminine and masculine third declension nouns have identical endings in all cases and numbers.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 2,
      question:
        "Why is it important to memorise the article, the lexical form of the noun and its genitive singular when studying third declension nouns?",
      options: [
        "This helps us with the nominative form, which is sometimes irregular.",
        "This allows us to remember the gender of the noun, which is important because the nouns have similar paradigms.",
        "This allows us to derive the stem of the noun from its genitive form.",
        "All of the above.",
      ],
      answer: "All of the above.",
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
      <h2 className="mb-4">Third Declension Greek Grammar Quiz</h2>

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
