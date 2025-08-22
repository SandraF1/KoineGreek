import React, { useState } from "react";

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  if (!card) return null; // prevents undefined errors

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        border: "1px solid #ccc",
        padding: 12,
        margin: 8,
        cursor: "pointer",
        width: 200,
      }}
    >
      {flipped ? (
        <div>
          <strong>Definition:</strong> {card.definition}
          <br />
          <strong>Example:</strong> {card.example}
        </div>
      ) : (
        <div>{card.word}</div>
      )}
    </div>
  );
}
