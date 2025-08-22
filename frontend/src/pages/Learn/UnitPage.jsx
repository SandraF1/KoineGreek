// src/pages/Learn/UnitPage.jsx
import React, { useState } from "react";

// --- Wildcard imports ---
const subsectionModules = import.meta.glob("./UnitSubsections/*.jsx", { eager: true });
const vocabModules = import.meta.glob("./Vocab/*.jsx", { eager: true });
const conceptModules = import.meta.glob("./ConceptCheck/*.jsx", { eager: true });

// Helper: get filename without extension
const getName = (path) => path.split("/").pop().replace(".jsx", "");

// Build mappings
const subsectionComponents = {};
for (let path in subsectionModules) {
  const name = getName(path); // e.g., Unit1_1_Alphabet
  const match = name.match(/^Unit(\d+)_(\d+)_(.+)$/);
  if (!match) continue;

  const unitNumber = parseInt(match[1], 10);
  const subsectionNumber = parseInt(match[2], 10);
  const sectionName = match[3];

  subsectionComponents[unitNumber] = subsectionComponents[unitNumber] || {};
  subsectionComponents[unitNumber][subsectionNumber] = {
    name: sectionName,
    component: subsectionModules[path].default,
  };
}

// Vocabulary mapping
const vocabComponents = {};
for (let path in vocabModules) {
  const name = getName(path); // e.g., Unit1Vocab
  const match = name.match(/^Unit(\d+)Vocab$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1], 10);
  vocabComponents[unitNumber] = vocabModules[path].default;
}

// Concept Check mapping
const conceptCheckComponents = {};
for (let path in conceptModules) {
  const name = getName(path); // e.g., Unit1ConceptCheck
  const match = name.match(/^Unit(\d+)ConceptCheck$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1], 10);
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

  const subsections = subsectionComponents[unitNumber] || {};
  const Vocab = vocabComponents[unitNumber] || null;
  const ConceptCheck = conceptCheckComponents[unitNumber] || null;
  const unitTitle = unitTitles[unitNumber] || `Unit ${unitNumber}`;

  const renderContent = () => {
    if (!selectedSection) return null;

    // Subsection content
    if (subsections[selectedSection]) {
      const Section = subsections[selectedSection].component;
      return <Section />;
    }

    // Vocabulary & Concept Check
    if (selectedSection === "Vocabulary" && Vocab) return <Vocab />;
    if (selectedSection === "Concept Check" && ConceptCheck) return <ConceptCheck />;

    return <p>Content not found.</p>;
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
        {/* Subsection buttons sorted by subsection number */}
        {Object.entries(subsections)
          .sort(([a], [b]) => a - b)
          .map(([num, { name }]) => (
            <button key={num} onClick={() => setSelectedSection(num)}>
              Unit{unitNumber}.{num} {name}
            </button>
          ))}

        {/* Vocabulary & Concept Check buttons */}
        {Vocab && (
          <button onClick={() => setSelectedSection("Vocabulary")}>Vocabulary</button>
        )}
        {ConceptCheck && (
          <button onClick={() => setSelectedSection("Concept Check")}>Concept Check</button>
        )}
      </div>

      {renderContent()}
    </div>
  );
}


/* Subsections: Unit<number><SectionName>.jsx

Vocabulary: Unit<number>Vocab.jsx

Concept Check: Unit<number>ConceptCheck.jsx */