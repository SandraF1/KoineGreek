import React, { useState, useEffect, Suspense } from "react";

// Helper function to dynamically import a component
const loadComponent = async (path) => {
  try {
    const module = await import(`${path}`);
    return module.default;
  } catch (err) {
    console.warn(`Component at ${path} not found.`);
    return null;
  }
};

export default function UnitPage({ unitNumber }) {
  const [selectedSection, setSelectedSection] = useState(null);
  const [subsectionComponents, setSubsectionComponents] = useState({});
  const [vocabComponent, setVocabComponent] = useState(null);
  const [conceptCheckComponent, setConceptCheckComponent] = useState(null);

  // Example: define subsection names for each unit
  const subsectionNames = {
    1: ["Subsection1", "Subsection2", "Subsection3"],
    2: ["Subsection1", "Subsection2"],
    3: ["Subsection1", "Subsection2", "Subsection3", "Subsection4"],
  };

  const unitTitle = {
    1: "Introduction to Greek",
    2: "Basic Reading",
    3: "Dialogues & Listening",
  };

  useEffect(() => {
    // Dynamically import all subsections for this unit
    const loadSubsections = async () => {
      const components = {};
      const names = subsectionNames[unitNumber] || [];
      for (let name of names) {
        const comp = await loadComponent(`./UnitSubsections/Unit${unitNumber}${name}.jsx`);
        if (comp) components[name] = comp;
      }
      setSubsectionComponents(components);
    };

    // Load vocab
    const loadVocab = async () => {
      const comp = await loadComponent(`./Vocab/Unit${unitNumber}Vocab.jsx`);
      setVocabComponent(() => comp);
    };

    // Load concept check
    const loadConceptCheck = async () => {
      const comp = await loadComponent(`./ConceptCheck/Unit${unitNumber}ConceptCheck.jsx`);
      setConceptCheckComponent(() => comp);
    };

    loadSubsections();
    loadVocab();
    loadConceptCheck();
  }, [unitNumber]);

  const renderContent = () => {
    if (!selectedSection) return null;

    if (selectedSection === "Vocabulary" && vocabComponent) {
      const Vocab = vocabComponent;
      return <Vocab />;
    }

    if (selectedSection === "Concept Check" && conceptCheckComponent) {
      const ConceptCheck = conceptCheckComponent;
      return <ConceptCheck />;
    }

    if (subsectionComponents[selectedSection]) {
      const Section = subsectionComponents[selectedSection];
      return <Section />;
    }

    return <p>Content not found.</p>;
  };

  return (
    <div>
      <h2>Unit {unitNumber}: {unitTitle[unitNumber]}</h2>

      <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", marginBottom: "20px" }}>
        {Object.keys(subsectionComponents).map((name) => (
          <button key={name} onClick={() => setSelectedSection(name)}>
            {name}
          </button>
        ))}
        {vocabComponent && (
          <button onClick={() => setSelectedSection("Vocabulary")}>Vocabulary</button>
        )}
        {conceptCheckComponent && (
          <button onClick={() => setSelectedSection("Concept Check")}>Concept Check</button>
        )}
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        {renderContent()}
      </Suspense>
    </div>
  );
}
