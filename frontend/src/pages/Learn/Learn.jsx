// src/pages/Learn/Learn.jsx
import React, { useState } from "react";
import UnitPage from "./UnitPage";

export default function Learn() {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const units = [1, 2, 3]; // later you can expand

  return (
    <div>
      <h1>Learn</h1>

      {/* List of Units */}
      <div>
        {units.map((unit) => (
          <button key={unit} onClick={() => setSelectedUnit(unit)}>
            Unit {unit}
          </button>
        ))}
      </div>

      {/* Show selected unit if chosen */}
      {selectedUnit && <UnitPage unitNumber={selectedUnit} />}
    </div>
  );
}
