// src/pages/Learn/Learn.jsx
import React, { useState } from "react";
import UnitPage from "./UnitPage";
import UnitSelector from "../../components/UnitSelector";
import FlashcardList from "../../components/Flashcards/FlashcardList";
import GrammarParser from "../../components/GrammarParser/GrammarParser";
import QuizFlashcards from "../../components/QuizBank/QuizFlashcards";
import { unit2Flashcards } from "../../components/Flashcards/DummyCards";

export default function Learn() {
  const [activeSection, setActiveSection] = useState(null); // "lesson", "vocab", "grammar", "quiz"
  const [selectedUnit, setSelectedUnit] = useState(null); // for lesson content
  const [selectedUnits, setSelectedUnits] = useState([]);   // for multi-unit sections

  const allUnits = [
    { id: 1, name: "Unit 1", hasContent: true },
    { id: 2, name: "Unit 2", hasContent: true },
    { id: 3, name: "Unit 3", hasContent: true },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section);

    // reset selections appropriately
    if (section === "lesson") {
      setSelectedUnits([]);
      if (!selectedUnit) setSelectedUnit(1);
    } else {
      setSelectedUnit(null);
      if (selectedUnits.length === 0) setSelectedUnits([1]);
    }
  };

  // Always sort selected units numerically
  const sortedUnits = [...selectedUnits].sort((a, b) => a - b);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Learn</h1>

      {/* Section buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {["lesson", "vocab", "grammar", "quiz"].map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={activeSection === section ? "active-section" : ""}
          >
            {section === "lesson"
              ? "Lesson Content"
              : section === "vocab"
              ? "Vocabulary Flashcards"
              : section === "grammar"
              ? "Grammar Parser"
              : "Quiz Bank"}
          </button>
        ))}
      </div>

      {/* Unit selector */}
      {activeSection && activeSection === "lesson" && (
        <UnitSelector
          units={allUnits}
          selectedUnits={selectedUnit ? [selectedUnit] : []}
          setSelectedUnits={(arr) => setSelectedUnit(arr[0] || null)}
          singleSelect={true}
        />
      )}

      {activeSection && activeSection !== "lesson" && (
        <UnitSelector
          units={allUnits}
          selectedUnits={selectedUnits}
          setSelectedUnits={setSelectedUnits}
        />
      )}

      {/* Render content */}
      {activeSection === "lesson" && selectedUnit && (
        <UnitPage unitNumber={selectedUnit} />
      )}

      {activeSection === "vocab" &&
        sortedUnits.map((unit) => (
          <div key={unit} style={{ marginTop: 20 }}>
            <h3>Unit {unit} Vocabulary Flashcards</h3>
            {unit === 2 ? <FlashcardList cards={unit2Flashcards} /> : <p>No cards yet.</p>}
          </div>
        ))}

      {activeSection === "grammar" &&
        sortedUnits.map((unit) => (
          <div key={unit} style={{ marginTop: 20 }}>
            <h3>Unit {unit} Grammar Parser</h3>
            <GrammarParser />
          </div>
        ))}

      {activeSection === "quiz" &&
        sortedUnits.map((unit) => (
          <div key={unit} style={{ marginTop: 20 }}>
            <h3>Unit {unit} Quiz Bank</h3>
            <QuizFlashcards />
          </div>
        ))}
    </div>
  );
}
