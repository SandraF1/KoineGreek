// src/pages/Learn/Learn.jsx
import React, { useState } from "react";
import UnitPage from "./UnitPage";
import FlashcardList from "../../components/Flashcards/FlashcardList";
import GrammarParser from "../../components/GrammarParser/GrammarParser";
import QuizFlashcards from "../../components/QuizBank/QuizFlashcards";

// Dummy data for Unit 2
import { unit2Flashcards } from "../../components/Flashcards/DummyCards";

export default function Learn() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const units = [1, 2, 3]; // Expand later

  const handleInteractiveClick = (section) => {
    setActiveSection(section);
    if (section !== "vocab") setSelectedUnit(null); // optional: hide unit page
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Learn</h1>

      {/* List of Units */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        {units.map((unit) => (
          <button
            key={unit}
            onClick={() => {
              setSelectedUnit(unit);
              setActiveSection(null);
            }}
          >
            Unit {unit}
          </button>
        ))}
      </div>

      {/* Interactive Buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={() => handleInteractiveClick("vocab")}>Vocabulary Flashcards</button>
        <button onClick={() => handleInteractiveClick("grammar")}>Grammar Parser</button>
        <button onClick={() => handleInteractiveClick("quiz")}>Quiz Bank</button>
      </div>

      {/* Render selected Unit */}
      {selectedUnit && <UnitPage unitNumber={selectedUnit} />}

      {/* Render interactive sections for Unit 2 */}
      {activeSection === "vocab" && (
        <div style={{ marginTop: 20 }}>
          <h3>Unit 2 Vocabulary Flashcards</h3>
          <FlashcardList cards={unit2Flashcards} />
        </div>
      )}

      {activeSection === "grammar" && (
        <div style={{ marginTop: 20 }}>
          <h3>Unit 2 Grammar Parser</h3>
          <GrammarParser />
        </div>
      )}

      {activeSection === "quiz" && (
        <div style={{ marginTop: 20 }}>
          <h3>Unit 2 Quiz Bank</h3>
          <QuizFlashcards />
        </div>
      )}
    </div>
  );
}
