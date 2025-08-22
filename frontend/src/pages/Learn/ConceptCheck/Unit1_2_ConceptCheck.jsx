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

  // Generate 3 random letters
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
  }, []);

  const handleChange = (index, value) => {
    const updated = [...quizItems];
    updated[index].userAnswer = value;
    setQuizItems(updated);
  };

  const checkAnswers = () => {
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
    setResult("Correct answers are filled in.");
  };

  const clearAnswers = () => {
    setQuizItems((prev) => prev.map((item) => ({ ...item, userAnswer: "" })));
    setResult("");
  };

  return (
    <section className="quiz-order">
      <h2>1.8 Alphabetical ordering</h2>
      <p>Type the correct number for each Greek letter. Hint: Alpha = 1.</p>

      <div>
        {quizItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "0.5rem" }}>
            <label>
              {item.letter} :{" "}
              <input
                type="number"
                min={1}
                max={24}
                value={item.userAnswer}
                onChange={(e) => handleChange(index, e.target.value)}
                aria-label={`Position for letter ${item.letter}`}
              />
            </label>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={checkAnswers}>Check Answers</button>{" "}
        <button onClick={showAnswers}>Show Correct Answers</button>{" "}
        <button onClick={clearAnswers}>Clear</button>
      </div>

      <div aria-live="polite" style={{ marginTop: "1rem", fontWeight: "bold" }}>
        {result}
      </div>
    </section>
  );
}
