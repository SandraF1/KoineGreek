// src/pages/Learn/Learn.jsx
import React, { useState } from "react";
import UnitPage from "./UnitPage";
import { useNavigate } from "react-router-dom";

// Optional: a small component for the 3 interactive buttons
function InteractiveButtons({ onClick }) {
  return (
    <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
      <button onClick={() => onClick("vocab")}>Vocabulary Flashcards</button>
      <button onClick={() => onClick("grammar")}>Grammar Parser</button>
      <button onClick={() => onClick("quiz")}>Quiz Bank</button>
    </div>
  );
}

export default function Learn() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const navigate = useNavigate();

  const units = [1, 2, 3]; // Expand later

  const handleInteractiveClick = (section) => {
    // Navigate to a page that shows that section for all units
    navigate(`/learn/${section}`);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Learn</h1>

      {/* List of Units */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        {units.map((unit) => (
          <button key={unit} onClick={() => setSelectedUnit(unit)}>
            Unit {unit}
          </button>
        ))}
      </div>

      {/* Interactive Buttons for all units */}
      <InteractiveButtons onClick={handleInteractiveClick} />

      {/* Show selected unit if chosen */}
      {selectedUnit && (
        <div style={{ marginTop: 30 }}>
          <UnitPage unitNumber={selectedUnit} />
        </div>
      )}
    </div>
  );
}
