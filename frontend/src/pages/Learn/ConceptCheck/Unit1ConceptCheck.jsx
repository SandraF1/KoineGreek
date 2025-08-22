import React from "react";

export default function Unit1ConceptCheck() {
  const questions = [
    { question: "What is the first letter?", answer: "alpha" },
    { question: "What is the second letter?", answer: "beta" },
  ];

  return (
    <div>
      <h3>Concept Check</h3>
      <ul>
        {questions.map((q, idx) => (
          <li key={idx}>
            <strong>Q:</strong> {q.question} <br />
            <strong>A:</strong> {q.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
