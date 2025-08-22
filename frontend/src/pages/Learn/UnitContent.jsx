// src/pages/Learn/UnitContent.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Corrected imports based on your folder structure
import FlashcardList from "../../components/Flashcards/FlashcardList";
import GrammarParser from "../../components/Flashcards/GrammarParser";
import QuizFlashcards from "../../components/Flashcards/QuizFlashcards";

export default function UnitContent() {
  const { section } = useParams();
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example fetch: replace with your API call if needed
    // For now we mock units 1,2,3
    setUnits([1, 2, 3]);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading content...</p>;
  if (!units.length) return <p>No units available.</p>;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>
        {section === "vocab"
          ? "Vocabulary Flashcards"
          : section === "grammar"
          ? "Grammar Parser"
          : section === "quiz"
          ? "Quiz Bank"
          : "Unknown Section"}
      </h2>

      {section === "vocab" &&
        units.map((unit) => (
          <div key={unit} style={{ marginBottom: 20 }}>
            <h3>Unit {unit}</h3>
            <FlashcardList cards={[]} /> {/* Replace [] with unit data if available */}
          </div>
        ))}

      {section === "grammar" &&
        units.map((unit) => (
          <div key={unit} style={{ marginBottom: 20 }}>
            <h3>Unit {unit}</h3>
            <GrammarParser /> {/* Can pass unitId if needed */}
          </div>
        ))}

      {section === "quiz" &&
        units.map((unit) => (
          <div key={unit} style={{ marginBottom: 20 }}>
            <h3>Unit {unit}</h3>
            <QuizFlashcards unitId={unit} />
          </div>
        ))}

      {!["vocab", "grammar", "quiz"].includes(section) && (
        <p>Invalid section.</p>
      )}
    </div>
  );
}
