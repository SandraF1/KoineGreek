import React, { useState } from "react";
import { useParams } from "react-router-dom";

const unitsQuestions = {
  Unit1: [
    {
      question: "What is a fruit?",
      options: ["Apple", "Book"],
      answer: "Apple",
    },
  ],
  Unit2: [
    {
      question: "What do you read?",
      options: ["Apple", "Book"],
      answer: "Book",
    },
  ],
};

export default function ConceptCheck() {
  const { unitId } = useParams();
  const questions = unitsQuestions[unitId] || [];

  const [selected, setSelected] = useState({});
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (i, option) => setSelected({ ...selected, [i]: option });
  const handleReveal = () => setRevealed(true);
  const handleClear = () => {
    setSelected({});
    setRevealed(false);
  };

  return (
    <div className="app-container">
      <div>
        <h3>Concept Check - {unitId}</h3>
        {questions.map((q, i) => (
          <div key={i}>
            <p>{q.question}</p>
            {q.options.map((o) => (
              <label key={o} style={{ marginRight: 10 }}>
                <input
                  type="radio"
                  name={`q${i}`}
                  value={o}
                  checked={selected[i] === o}
                  onChange={() => handleSelect(i, o)}
                />
                {o}
              </label>
            ))}
            {revealed && <p>Answer: {q.answer}</p>}
          </div>
        ))}
        <button onClick={handleReveal}>Check Answers</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
