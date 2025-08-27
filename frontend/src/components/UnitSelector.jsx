// src/components/UnitSelector.jsx
import React from "react";

export default function UnitSelector({
  units = [],
  selectedUnits = [],
  setSelectedUnits,
  singleSelect = false,
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
    <div className="d-flex gap-2 flex-wrap">
      {units
        .filter((u) => u.hasContent)
        .map((u) => {
          const isSelected = selectedUnits.includes(u.id);
          return (
            <button
              key={u.id}
              className={`btn btn-${isSelected ? "primary" : "outline-primary"}`}
              onClick={() => toggleUnit(u.id)}
            >
              {u.name}
            </button>
          );
        })}
    </div>
  );
}
