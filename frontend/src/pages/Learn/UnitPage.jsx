// src/pages/Learn/UnitPage.jsx
import React, { useState, useEffect } from "react";

// Wildcard imports
const subsectionModules = import.meta.glob("./UnitSubsections/*.jsx", { eager: true });
const vocabModules = import.meta.glob("./Vocab/*.jsx", { eager: true });
const conceptModules = import.meta.glob("./ConceptCheck/*.jsx", { eager: true });

// Helper: get filename without extension
const getName = (path) => path.split("/").pop().replace(".jsx", "");

// --- Subsections ---
const subsectionComponents = {};
for (let path in subsectionModules) {
  const name = getName(path); // e.g., Unit1_1_Alphabet
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

// --- Vocab ---
const vocabComponents = {};
for (let path in vocabModules) {
  const name = getName(path);
  const match = name.match(/^Unit(\d+)_Vocab$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1]);
  vocabComponents[unitNumber] = vocabModules[path].default;
}

// --- ConceptCheck Wrapper ---
function ConceptCheckWrapper({ unitNumber }) {
  const conceptSections = Object.keys(conceptModules)
    .map((path) => {
      const name = getName(path);
      const match = name.match(new RegExp(`^Unit${unitNumber}_(\\d+)_ConceptCheck$`));
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

  const [currentIndex, setCurrentIndex] = useState(0);
  if (!conceptSections.length)
    return <p>No concept check found for Unit {unitNumber}.</p>;

  const CurrentSection = conceptSections[currentIndex].Component;

  return (
    <div>
      <h3>Concept Check</h3>
      <CurrentSection key={`unit${unitNumber}-concept-${currentIndex}`} />
      <div className="navigation-buttons">
        <button
          onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>
        <button
          onClick={() =>
            setCurrentIndex((i) => Math.min(i + 1, conceptSections.length - 1))
          }
          disabled={currentIndex === conceptSections.length - 1}
        >
          Next →
        </button>
      </div>
      <p>
        Section {currentIndex + 1} of {conceptSections.length}:{" "}
        {conceptSections[currentIndex].name}
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

  // Reset selection on unit change
  useEffect(() => {
    setSelectedSection(null);
  }, [unitNumber]);

  // Combine all sections for buttons
  const buttons = [
    ...subsections.sort((a, b) => a.number - b.number),
    ...(Vocab
      ? [
          {
            key: "Vocabulary",
            number: 999,
            name: "Vocabulary",
            Component: () => <Vocab key={`unit${unitNumber}-vocab`} />,
          },
        ]
      : []),
    {
      key: "ConceptCheck",
      number: 1000,
      name: "Concept Check",
      Component: () => <ConceptCheckWrapper unitNumber={unitNumber} />,
    },
  ];

  const renderContent = () => {
    if (!selectedSection) return null;
    const Section = selectedSection.Component;
    return (
      <section className="unit-section" key={`unit${unitNumber}-${selectedSection.key}`}>
        {Section ? <Section /> : <p>Content not found.</p>}
      </section>
    );
  };

  return (
    <div className="app-container">
      <h2>
        Unit {unitNumber}: {unitTitle}
      </h2>

      <div className="unit-button-grid">
        {buttons.map((btn) => (
          <button key={btn.key} onClick={() => setSelectedSection(btn)}>
            {btn.number < 999
              ? `Unit ${unitNumber}.${btn.number} ${btn.name.replace(/_/g, " ")}`
              : btn.name.replace(/_/g, " ")}
          </button>
        ))}
      </div>

      <div className="unit-content">{renderContent()}</div>
    </div>
  );
}
