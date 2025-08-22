// src/pages/Learn/UnitContent.jsx
import React from "react";
import { unit2Flashcards } from "../../components/Flashcards/DummyCards";
import FlashcardList from "../../components/Flashcards/FlashcardList";

export default function UnitContent({ unitNumber }) {
  // Map unit numbers to flashcards
  const flashcardsByUnit = {
    2: unit2Flashcards,
  };

  const cards = flashcardsByUnit[unitNumber] || [];

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Unit {unitNumber} Vocabulary Flashcards</h2>
      <FlashcardList cards={cards} />
    </div>
  );
}
