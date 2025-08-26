// src/pages/Learn/Learn.jsx
import React, { useState, useEffect } from "react";
import UnitPage from "./UnitPage";
import UnitSelector from "../../components/UnitSelector";
import GrammarParser from "../../components/GrammarParser/GrammarParser";
import QuizFlashcards from "../../components/QuizBank/QuizFlashcards";

// Import vocab units that exist
import { unit2Flashcards } from "../../components/Flashcards/DummyCards";

export default function Learn({ unitIds, setUnitIds }) {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(1);

  const allUnits = [
    { id: 1, name: "Unit 1", hasContent: true },
    { id: 2, name: "Unit 2", hasContent: true },
    { id: 3, name: "Unit 3", hasContent: true },
  ];

  // Map of vocab cards by unit id
  const allVocabCards = {
    2: unit2Flashcards,
    // Add more units as they get created, e.g., 1: unit1Flashcards
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === "lesson") {
      setUnitIds([]);
      if (!selectedUnit) setSelectedUnit(1);
    } else {
      setSelectedUnit(null);
      if (!unitIds || unitIds.length === 0) setUnitIds([1]);
    }
  };

  const sortedUnits = [...unitIds].sort((a, b) => a - b);

  // Vocab flashcards component
  const VocabFlashcards = ({ units }) => {
    const [allCards, setAllCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
      let combined = [];
      units.forEach((id) => {
        if (allVocabCards[id]) combined = combined.concat(allVocabCards[id]);
      });

      if (!combined.length) {
        setAllCards([]);
        setCurrentIndex(0);
        setFlipped(false);
        return;
      }

      // Randomize
      combined = combined
        .map((c) => ({ ...c, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort);

      setAllCards(combined);
      setCurrentIndex(0);
      setFlipped(false);
    }, [units]);

    const nextCard = () => {
      if (allCards.length === 0) return;
      setCurrentIndex((prev) => (prev + 1) % allCards.length);
      setFlipped(false);
    };

    if (allCards.length === 0)
      return (
        <p style={{ fontSize: "1.2rem" }}>
          No vocabulary flashcards for selected units.
        </p>
      );

    const currentCard = allCards[currentIndex];

    return (
      <div style={{ marginBottom: 20 }}>
        <div
          onClick={() => setFlipped((f) => !f)}
          style={{
            border: "1px solid #ccc",
            padding: 30,
            width:400,
            height: 220,
            borderRadius: 8,
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "1.4rem",
            fontFamily: "serif",
            marginBottom: 10,
            cursor: "pointer",
            whiteSpace: "pre-wrap",
          }}
        >
          {flipped
            ? `${currentCard.definition || ""}\n${currentCard.example || ""}`
            : currentCard.word}
        </div>

        <button
          onClick={nextCard}
          style={{
            padding: "10px 20px",
            borderRadius: 5,
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem" }}>Learn</h1>

      {/* Section buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {["lesson", "vocab", "grammar", "quiz"].map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: 5,
              border: "1px solid #ccc",
              backgroundColor:
                activeSection === section ? "#007bff" : "#f9f9f9",
              color: activeSection === section ? "#fff" : "#000",
              cursor: "pointer",
              fontSize: "1rem",
            }}
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
      {activeSection === "lesson" && (
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
          selectedUnits={unitIds}
          setSelectedUnits={setUnitIds}
        />
      )}

      {/* Render content */}
      {activeSection === "lesson" && selectedUnit && (
        <UnitPage unitNumber={selectedUnit} />
      )}

      {activeSection === "vocab" && <VocabFlashcards units={sortedUnits} />}

      {activeSection === "grammar" &&
        sortedUnits.map((unit) => (
          <div key={unit} style={{ marginTop: 20 }}>
            <h3 style={{ fontSize: "1.2rem" }}>Unit {unit} Grammar Parser</h3>
            <GrammarParser unit={unit} />
          </div>
        ))}

      {activeSection === "quiz" &&
        (sortedUnits.length > 0 ? (
          <QuizFlashcards unitIds={sortedUnits} />
        ) : (
          <p>Please select at least one unit to view quiz flashcards.</p>
        ))}
    </div>
  );
}
