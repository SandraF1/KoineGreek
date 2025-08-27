import React, { useState } from "react";
import "../../styles/global.css";

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  if (!card) return null;

  return (
    <div onClick={() => setFlipped(!flipped)}>
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
