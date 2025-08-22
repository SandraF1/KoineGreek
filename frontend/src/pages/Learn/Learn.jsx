import React, { useState } from "react";
import UnitPage from "./UnitPage";
import FlashcardList from "../../components/Flashcards/FlashcardList";
import GrammarParser from "../../components/GrammarParser/GrammarParser";
import QuizFlashcards from "../../components/QuizBank/QuizFlashcards";

// Dummy flashcards for unit 2
import { unit2Flashcards } from "../../components/Flashcards/DummyCards";

export default function Learn() {
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const units = [1, 2, 3];

  const handleUnitClick = (unit) => {
    setActiveUnit(unit);
    setActiveSection(null); // hide any flashcards/quiz/parser
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveUnit(null); // hide UnitPage completely
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Learn</h1>

      {/* Unit buttons */}
      <div
        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}
      >
        {units.map((unit) => (
          <button key={unit} onClick={() => handleUnitClick(unit)}>
            Unit {unit}
          </button>
        ))}
      </div>

      {/* Section buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={() => handleSectionClick("vocab")}>
          Vocabulary Flashcards
        </button>
        <button onClick={() => handleSectionClick("grammar")}>
          Grammar Parser
        </button>
        <button onClick={() => handleSectionClick("quiz")}>Quiz Bank</button>
      </div>

      {/* ONLY show UnitPage if no active section */}
      {!activeSection && activeUnit && <UnitPage unitNumber={activeUnit} />}

      {/* Show selected section */}
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
