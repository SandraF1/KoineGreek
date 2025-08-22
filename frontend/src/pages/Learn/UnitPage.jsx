import React, { useState } from "react";

// --- Wildcard imports for all units ---
const subsectionModules = import.meta.glob("./UnitSubsections/*.jsx", {
  eager: true,
});
const vocabModules = import.meta.glob("./Vocab/*.jsx", { eager: true });
const conceptModules = import.meta.glob("./ConceptCheck/*.jsx", {
  eager: true,
});

// Helper: extract name from filename, e.g., Unit1Subsection1.jsx -> Unit1Subsection1
const getName = (path) => path.split("/").pop().replace(".jsx", "");

// Build mappings automatically
const subsectionComponents = {};
for (let path in subsectionModules) {
  const name = getName(path);
  const match = name.match(/^Unit(\d+)(.+)$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1]);
  const sectionName = match[2];
  subsectionComponents[unitNumber] = subsectionComponents[unitNumber] || {};
  subsectionComponents[unitNumber][sectionName] =
    subsectionModules[path].default;
}

const vocabComponents = {};
for (let path in vocabModules) {
  const name = getName(path);
  const match = name.match(/^Unit(\d+)Vocab$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1]);
  vocabComponents[unitNumber] = vocabModules[path].default;
}

const conceptCheckComponents = {};
for (let path in conceptModules) {
  const name = getName(path);
  const match = name.match(/^Unit(\d+)ConceptCheck$/);
  if (!match) continue;
  const unitNumber = parseInt(match[1]);
  conceptCheckComponents[unitNumber] = conceptModules[path].default;
}

// Optional: unit titles (can also auto-generate or read from a JSON)
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

    if (subsections[selectedSection]) {
      const Section = subsections[selectedSection];
      return <Section />;
    }

    if (selectedSection === "Vocabulary" && Vocab) return <Vocab />;
    if (selectedSection === "Concept Check" && ConceptCheck)
      return <ConceptCheck />;

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
        {Object.keys(subsections).map((name) => (
          <button key={name} onClick={() => setSelectedSection(name)}>
            {name}
          </button>
        ))}

        {Vocab && (
          <button onClick={() => setSelectedSection("Vocabulary")}>
            Vocabulary
          </button>
        )}
        {ConceptCheck && (
          <button onClick={() => setSelectedSection("Concept Check")}>
            Concept Check
          </button>
        )}
      </div>

      {renderContent()}
    </div>
  );
}

/* Subsections: Unit<number><SectionName>.jsx

Vocabulary: Unit<number>Vocab.jsx

Concept Check: Unit<number>ConceptCheck.jsx */