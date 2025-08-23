import React from "react";

export default function UnitSelector({
  units,
  selectedUnits,
  setSelectedUnits,
  singleSelect = false, // default false for multi-select
}) {
  const toggleUnit = (unitId) => {
    if (singleSelect) {
      setSelectedUnits([unitId]); // only one unit allowed
    } else {
      if (selectedUnits.includes(unitId)) {
        setSelectedUnits(selectedUnits.filter((id) => id !== unitId));
      } else {
        setSelectedUnits([...selectedUnits, unitId]);
      }
    }
  };

  if (!units || units.length === 0) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "1rem" }}>
      {units.map((u) => (
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
