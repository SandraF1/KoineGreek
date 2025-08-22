import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
  if (!cards || cards.length === 0) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {cards.map((c, i) => (
        <Flashcard key={i} card={c} />
      ))}
    </div>
  );
}
