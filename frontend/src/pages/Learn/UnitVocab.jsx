import React from "react";
import FlashcardList from "../../components/Flashcards/FlashcardList";
import { useParams } from "react-router-dom";

// Sample unit vocab
const unitsVocab = {
  Unit1: [
    { word: "apple", definition: "A fruit", example: "I ate an apple." },
    { word: "book", definition: "Something to read", example: "She reads a book." },
  ],
  Unit2: [
    { word: "orange", definition: "A fruit", example: "I like oranges." },
  ],
};

export default function UnitVocab() {
  const { unitId } = useParams();
  const vocab = unitsVocab[unitId] || [];

  return (
    <div>
      <h3>{unitId} Vocabulary</h3>
      <FlashcardList cards={vocab} />
    </div>
  );
}
