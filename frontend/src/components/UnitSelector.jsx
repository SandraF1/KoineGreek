import React from "react";

export default function UnitSelector({
  units = [],
  selectedUnits = [],
  setSelectedUnits,
  singleSelect = false, // new prop
}) {
  if (!units || units.length === 0) return null;

  const toggleUnit = (unitId) => {
    if (singleSelect) {
      setSelectedUnits([unitId]);
    } else {
      if (selectedUnits.includes(unitId)) {
        setSelectedUnits(selectedUnits.filter((id) => id !== unitId));
      } else {
        setSelectedUnits([...selectedUnits, unitId]);
      }
    }
  };

  return (
    <div style={{ marginBottom: "1rem", display: "flex", gap: 8, flexWrap: "wrap" }}>
      {units
        .filter((u) => u.hasContent)
        .map((u) => (
          <button
            key={u.id}
            onClick={() => toggleUnit(u.id)}
            style={{
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
        ))}
    </div>
  );
}
