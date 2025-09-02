import React, { useState } from "react";

export default function GreekGrammarQuiz() {
  const questions = [
    {
      id: 1,
      question: "What gender are most second declension nouns?",
      options: ["Feminine", "Masculine", "Neuter", "Masculine or neuter"],
      answer: "Masculine or neuter",
    },
    {
      id: 2,
      question:
        "For which case and number are the second declension masculine and neuter noun endings identical to the first declension noun endings?",
      options: [
        "Genitive singular",
        "Genitive plural",
        "Nominative singular and plural",
      ],
      answer: "Genitive plural",
    },
    {
      id: 3,
      question:
        "For which case and number do the declension masculine articles not begin with a tau?",
      options: [
        "Nominative singular",
        "Nominative plural",
        "Both nominative singular and plural",
      ],
      answer: "Both nominative singular and plural",
    },
    {
      id: 4,
      question:
        "True or false: The dative singular iota subscript of the masculine noun can be ignored, as it is not part of the spelling and grammar of the word.",
      options: ["True", "False"],
      answer: "False",
    },
    {
      id: 5,
      question:
        "True or false: The nominative and accusative neuter nouns are identical in the singular and plural.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 6,
      question:
        "True or false: The neuter genitive and dative singular and plural share the endings of the masculine genitive and dative singular and plural.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 7,
      question:
        "True or false: The vocative case is the case of direct address.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 8,
      question:
        "True or false: The vocative is identical to the nominative in the plural and in the first declension singular.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      id: 9,
      question: "How can proper nouns be declined?",
      options: [
        "Regularly",
        "Irregularly",
        "They may not decline at all and be unchangeable",
        "All of the above",
      ],
      answer: "All of the above",
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
      if (userAnswers[q.id] === q.answer) {
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
      <h2 className="mb-4">Koine Greek Grammar Quiz</h2>

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
                onChange={() => handleChange(q.id, opt)}
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
