import React from "react";

export default function UnitSelector({ units, selectedUnits, setSelectedUnits }) {
  const toggleUnit = (unitId) => {
    if (selectedUnits.includes(unitId)) {
      setSelectedUnits(selectedUnits.filter((id) => id !== unitId));
    } else {
      setSelectedUnits([...selectedUnits, unitId]);
    }
  };

  if (!units || units.length === 0) return null;

  return (
    <div style={{ marginBottom: "1rem" }}>
      {units.map((u) =>
        u.hasContent ? (
          <button
            key={u.id}
            onClick={() => toggleUnit(u.id)}
            style={{
              marginRight: 8,
              padding: "0.5rem 1rem",
              borderRadius: 5,
              border: selectedUnits.includes(u.id) ? "2px solid #007bff" : "1px solid #ccc",
              backgroundColor: selectedUnits.includes(u.id) ? "#007bff" : "#f9f9f9",
              color: selectedUnits.includes(u.id) ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {u.name}
          </button>
        ) : null
      )}
    </div>
  );
}
