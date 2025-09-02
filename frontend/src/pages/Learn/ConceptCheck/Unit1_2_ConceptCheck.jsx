import React, { useState, useEffect } from "react";

const alphabet = [
  "α",
  "β",
  "γ",
  "δ",
  "ε",
  "ζ",
  "η",
  "θ",
  "ι",
  "κ",
  "λ",
  "μ",
  "ν",
  "ξ",
  "ο",
  "π",
  "ρ",
  "σ",
  "τ",
  "υ",
  "φ",
  "χ",
  "ψ",
  "ω",
];

export default function QuizOrder() {
  const [quizItems, setQuizItems] = useState([]);
  const [result, setResult] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const selected = [];
    const usedIndexes = [];

    while (selected.length < 3) {
      const idx = Math.floor(Math.random() * alphabet.length);
      if (!usedIndexes.includes(idx)) {
        usedIndexes.push(idx);
        selected.push({
          letter: alphabet[idx],
          position: idx + 1,
          userAnswer: "",
        });
      }
    }

    setQuizItems(selected);
    setChecked(false);
    setResult("");
  }, []);

  const handleChange = (index, value) => {
    const updated = [...quizItems];
    updated[index].userAnswer = value;
    setQuizItems(updated);
  };

  const checkAnswers = () => {
    setChecked(true);
    let correctCount = 0;
    quizItems.forEach((item) => {
      if (parseInt(item.userAnswer) === item.position) correctCount++;
    });
    setResult(`You got ${correctCount} out of ${quizItems.length} correct.`);
  };

  const showAnswers = () => {
    setQuizItems((prev) =>
      prev.map((item) => ({ ...item, userAnswer: item.position.toString() }))
    );
    setChecked(true);
    setResult("Correct answers are filled in.");
  };

  const clearAnswers = () => {
    setQuizItems((prev) => prev.map((item) => ({ ...item, userAnswer: "" })));
    setChecked(false);
    setResult("");
  };

  const getInputClass = (item) => {
    if (!checked) return "form-control me-2";
    if (parseInt(item.userAnswer) === item.position)
      return "form-control border-success me-2";
    return "form-control border-danger me-2";
  };

  return (
    <section className="unit-section container my-4">
      <h2>1.8 Alphabetical ordering</h2>
      <p>Type the correct number for each Greek letter. Hint: Alpha = 1.</p>

      <div className="mb-3">
        {quizItems.map((item, index) => (
          <div key={index} className="mb-2 d-flex align-items-center">
            <span className="fw-bold fs-2 me-3">{item.letter}</span>
            <input
              type="number"
              min={1}
              max={24}
              value={item.userAnswer}
              onChange={(e) => handleChange(index, e.target.value)}
              aria-label={`Position for letter ${item.letter}`}
              className={getInputClass(item)}
              disabled={checked && result !== "Correct answers are filled in."}
            />
          </div>
        ))}
      </div>

      <div className="mt-3">
        <button
          className="btn btn-info me-2"
          onClick={checkAnswers}
          disabled={checked}
        >
          Check Answers
        </button>
        <button className="btn btn-success me-2" onClick={showAnswers}>
          Show Correct Answers
        </button>
        <button className="btn btn-secondary" onClick={clearAnswers}>
          Clear
        </button>
      </div>

      {result && (
        <div className="mt-3">
          <h4 className="fw-bold">{result}</h4>
        </div>
      )}
    </section>
  );
}
