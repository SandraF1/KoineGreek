// src/pages/Learn/UnitPage.jsx
import React, { useState } from "react";

// --- Wildcard imports ---
const subsectionModules = import.meta.glob("./UnitSubsections/*.jsx", { eager: true });
const vocabModules = import.meta.glob("./Vocab/*.jsx", { eager: true });
const conceptModules = import.meta.glob("./ConceptCheck/*.jsx", { eager: true });

// Helper: extract filename without extension
const getName = (path) => path.split("/").pop().replace(".jsx", "");

// Build subsection mappings
const subsectionComponents = {};
for (let path in subsectionModules) {
  const name = getName(path); // e.g., Unit1_2_Diphthongs
  const match = name.match(/^Unit(\d+)_(\d+)_(.+)$/);
  if (!match) continue;
  const [_, unitNumStr, subNumStr, subName] = match;
  const unitNumber = parseInt(unitNumStr);
  const subNumber = parseInt(subNumStr);
  subsectionComponents[unitNumber] = subsectionComponents[unitNumber] || [];
  subsectionComponents[unitNumber].push({
    key: name,
    number: subNumber,
    name: subName,
    Component: subsectionModules[path].default,
  });
}

// Vocab mapping
const vocabComponents = {};
for (let path in vocabModules) {
  const name = getName(path);
  const match = name.match(/^Unit(\d+)_Vocab$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1]);
  vocabComponents[unitNumber] = vocabModules[path].default;
}

// Concept check mapping
const conceptCheckComponents = {};
for (let path in conceptModules) {
  const name = getName(path);
  const match = name.match(/^Unit(\d+)_ConceptCheck$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1]);
  conceptCheckComponents[unitNumber] = conceptModules[path].default;
}

// Optional: unit titles
const unitTitles = {
  1: "Introduction to Greek",
  2: "Basic Reading",
  3: "Dialogues & Listening",
};

export default function UnitPage({ unitNumber }) {
  const [selectedSection, setSelectedSection] = useState(null);

  const subsections = subsectionComponents[unitNumber] || [];
  const Vocab = vocabComponents[unitNumber] || null;
  const ConceptCheck = conceptCheckComponents[unitNumber] || null;
  const unitTitle = unitTitles[unitNumber] || `Unit ${unitNumber}`;

  // Combine all buttons: subsections first, then vocab/concept
  const buttons = [
    ...subsections.sort((a, b) => a.number - b.number),
    ...(Vocab ? [{ key: "Vocabulary", number: 999, name: "Vocabulary", Component: Vocab }] : []),
    ...(ConceptCheck ? [{ key: "ConceptCheck", number: 1000, name: "Concept Check", Component: ConceptCheck }] : []),
  ];

  const renderContent = () => {
    if (!selectedSection) return null;
    const Section = selectedSection.Component;
    return Section ? <Section /> : <p>Content not found.</p>;
  };

  return (
    <div>
      <h2>
        Unit {unitNumber}: {unitTitle}
      </h2>

      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          marginBottom: "20px",
        }}
      >
        {buttons.map((btn) => (
          <button key={btn.key} onClick={() => setSelectedSection(btn)}>
            {btn.number < 999
              ? `Unit ${unitNumber}.${btn.number} ${btn.name.replace(/_/g, " ")}`
              : btn.name.replace(/_/g, " ")}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
}



/* Subsections: Unit<number><SectionName>.jsx

Vocabulary: Unit<number>Vocab.jsx

Concept Check: Unit<number>ConceptCheck.jsx */