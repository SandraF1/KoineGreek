import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ cards }) {
  if (!cards || cards.length === 0) return null;

  return (
    <div>
      {cards.map((c, i) => (
        <Flashcard key={i} card={c} />
      ))}
    </div>
  );
}
