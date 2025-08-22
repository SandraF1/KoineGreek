import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
  if (!cards || cards.length === 0) return <p>No vocabulary available.</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((c, i) => (
        <Flashcard key={i} card={c} />
      ))}
    </div>
  );
}
