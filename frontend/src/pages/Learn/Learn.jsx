import React, { useState } from "react";
import UnitPage from "./UnitPage";
import UnitSelector from "../../components/UnitSelector";
import FlashcardList from "../../components/Flashcards/FlashcardList";
import GrammarParser from "../../components/GrammarParser/GrammarParser";
import QuizFlashcards from "../../components/QuizBank/QuizFlashcards";
import { unit2Flashcards } from "../../components/Flashcards/DummyCards";

export default function Learn() {
  const [activeSection, setActiveSection] = useState(null); // "lesson", "vocab", "grammar", "quiz"
  const [selectedUnits, setSelectedUnits] = useState([]);

  const units = [
    { id: 1, name: "Unit 1", hasContent: true },
    { id: 2, name: "Unit 2", hasContent: true },
    { id: 3, name: "Unit 3", hasContent: true },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section);
    // Reset selected units when switching section
    setSelectedUnits([]);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Learn</h1>

      {/* Section buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={() => handleSectionClick("lesson")}>Lesson Content</button>
        <button onClick={() => handleSectionClick("vocab")}>Vocabulary Flashcards</button>
        <button onClick={() => handleSectionClick("grammar")}>Grammar Parser</button>
        <button onClick={() => handleSectionClick("quiz")}>Quiz Bank</button>
      </div>

      {/* Unit selector */}
      {activeSection && (
        <UnitSelector
          units={units}
          selectedUnits={selectedUnits}
          setSelectedUnits={setSelectedUnits}
          singleSelect={activeSection === "lesson"} // single select for lesson, multi for others
        />
      )}

      {/* Render content based on section */}
      {activeSection === "lesson" &&
        selectedUnits.length === 1 &&
        <UnitPage unitNumber={selectedUnits[0]} />
      }

      {activeSection === "vocab" && selectedUnits.length > 0 && (
        <div style={{ marginTop: 20 }}>
          {selectedUnits.map((unit) => (
            <div key={unit}>
              <h3>Unit {unit} Vocabulary Flashcards</h3>
              {unit === 2 ? <FlashcardList cards={unit2Flashcards} /> : <p>No cards yet.</p>}
            </div>
          ))}
        </div>
      )}

      {activeSection === "grammar" && selectedUnits.length > 0 && (
        <div style={{ marginTop: 20 }}>
          {selectedUnits.map((unit) => (
            <div key={unit}>
              <h3>Unit {unit} Grammar Parser</h3>
              <GrammarParser />
            </div>
          ))}
        </div>
      )}

      {activeSection === "quiz" && selectedUnits.length > 0 && (
        <div style={{ marginTop: 20 }}>
          {selectedUnits.map((unit) => (
            <div key={unit}>
              <h3>Unit {unit} Quiz Bank</h3>
              <QuizFlashcards />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
