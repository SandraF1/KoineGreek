import React from "react";

export default function Unit1Vocab() {
  const words = ["alpha", "beta", "gamma", "delta"];

  return (
    <div className="unit-section">
      <h2>Vocabulary</h2>
      <p>Here are some key Greek letters you should know:</p>
      <ul className="vocab-list">
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
