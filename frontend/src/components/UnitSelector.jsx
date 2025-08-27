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
    <div>
      {units
        .filter((u) => u.hasContent)
        .map((u) => (
          <button key={u.id} onClick={() => toggleUnit(u.id)}>
            {u.name}
          </button>
        ))}
    </div>
  );
}
