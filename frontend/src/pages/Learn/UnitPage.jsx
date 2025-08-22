// src/pages/Learn/UnitPage.jsx
import React, { useState } from "react";

// Wildcard imports
const subsectionModules = import.meta.glob("./UnitSubsections/*.jsx", { eager: true });
const vocabModules = import.meta.glob("./Vocab/*.jsx", { eager: true });
const conceptModules = import.meta.glob("./ConceptCheck/*.jsx", { eager: true });

const getName = (path) => path.split("/").pop().replace(".jsx", "");

// Subsections
const subsectionComponents = {};
for (let path in subsectionModules) {
  const name = getName(path);
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

// Vocab
const vocabComponents = {};
for (let path in vocabModules) {
  const name = getName(path);
  const match = name.match(/^Unit(\d+)_Vocab$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1]);
  vocabComponents[unitNumber] = vocabModules[path].default;
}

// ConceptCheck wrapper
function ConceptCheckWrapper({ unitNumber }) {
  const subsections = Object.keys(conceptModules)
    .map((path) => {
      const name = getName(path);
      const match = name.match(new RegExp(`Unit${unitNumber}_(\\d+)_ConceptCheck`));
      if (!match) return null;
      const Component = conceptModules[path].default;
      return {
        key: name,
        number: parseInt(match[1]),
        name: `Concept ${match[1]}`,
        Component,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.number - b.number);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  if (!subsections.length) return <p>No concept check found for Unit {unitNumber}.</p>;

  const CurrentSection = subsections[currentIndex].Component;

  return (
    <div className="unit-section">
      <h3>Concept Check</h3>
      <CurrentSection />
      <div style={{ marginTop: "1rem" }}>
        <button
          className="primary"
          onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>{" "}
        <button
          className="primary"
          onClick={() => setCurrentIndex((i) => Math.min(i + 1, subsections.length - 1))}
          disabled={currentIndex === subsections.length - 1}
        >
          Next →
        </button>
      </div>
      <p>
        Section {currentIndex + 1} of {subsections.length}: {subsections[currentIndex].name}
      </p>
    </div>
  );
}

// Unit titles
const unitTitles = {
  1: "Introduction to Greek",
  2: "Basic Reading",
  3: "Dialogues & Listening",
};

export default function UnitPage({ unitNumber }) {
  const [selectedSection, setSelectedSection] = useState(null);

  const subsections = subsectionComponents[unitNumber] || [];
  const Vocab = vocabComponents[unitNumber] || null;
  const unitTitle = unitTitles[unitNumber] || `Unit ${unitNumber}`;

  const buttons = [
    ...subsections.sort((a, b) => a.number - b.number),
    ...(Vocab ? [{ key: "Vocabulary", number: 999, name: "Vocabulary", Component: Vocab }] : []),
    { key: "ConceptCheck", number: 1000, name: "Concept Check", Component: () => <ConceptCheckWrapper unitNumber={unitNumber} /> },
  ];

  const renderContent = () => {
    if (!selectedSection) return null;
    const Section = selectedSection.Component;
    return <div className="unit-section">{Section && <Section />}</div>;
  };

  return (
    <div className="app-container">
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
          <button key={btn.key} className="primary" onClick={() => setSelectedSection(btn)}>
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
