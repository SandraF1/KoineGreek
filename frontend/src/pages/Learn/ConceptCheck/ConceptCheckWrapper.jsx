// src/pages/Learn/ConceptCheck/ConceptCheckWrapper.jsx
import React, { useState } from "react";

// Dynamically import all concept check subsections
const modules = import.meta.glob("./Unit*_?_ConceptCheck.jsx", { eager: true });

export default function ConceptCheckWrapper({ unitNumber }) {
  // Filter modules for this unit
  const subsections = Object.keys(modules)
    .map((path) => {
      const match = path.match(
        new RegExp(`Unit${unitNumber}_(\\d+)_ConceptCheck`)
      );
      if (!match) return null;
      const Component = modules[path].default;
      return {
        key: `Unit${unitNumber}_${match[1]}`,
        number: parseInt(match[1]),
        name: `Concept ${match[1]}`,
        Component,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.number - b.number);

  const [currentIndex, setCurrentIndex] = useState(0);
  if (!subsections.length)
    return <p>No concept check found for Unit {unitNumber}.</p>;

  const CurrentSection = subsections[currentIndex].Component;

  const goNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, subsections.length - 1));
  const goBack = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      <h3>Concept Check</h3>
      <CurrentSection />
      <div>
        <button onClick={goBack} disabled={currentIndex === 0}>
          ← Previous
        </button>
        <button
          onClick={goNext}
          disabled={currentIndex === subsections.length - 1}
        >
          Next →
        </button>
      </div>
      <p>
        Section {currentIndex + 1} of {subsections.length}:{" "}
        {subsections[currentIndex].name}
      </p>
    </div>
  );
}
