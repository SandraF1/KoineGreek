import React from "react";

export default function Unit1Vocab() {
  const words = ["alpha", "beta", "gamma", "delta"];
  return (
    <div>
      <h3>Vocabulary</h3>
      <ul>
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
