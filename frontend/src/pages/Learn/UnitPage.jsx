// src/pages/Learn/UnitPage.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

// Wildcard imports
const subsectionModules = import.meta.glob("./UnitSubsections/*.jsx", {
  eager: true,
});
const vocabModules = import.meta.glob("./Vocab/*.jsx", { eager: true });
const conceptModules = import.meta.glob("./ConceptCheck/*.jsx", {
  eager: true,
});

// Helper: get filename without extension
const getName = (path) => path.split("/").pop().replace(".jsx", "");

// --- Subsections ---
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
      const match = name.match(
        new RegExp(`^Unit${unitNumber}_(\\d+)_ConceptCheck$`)
      );
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
  if (!conceptSections.length) return null;

  const CurrentSection = conceptSections[currentIndex].Component;

  return (
    <Card className="mt-4 p-3 shadow-sm border-0">
      <Card.Body>
        <Card.Title className="h4 mb-3">Concept Check</Card.Title>
        <CurrentSection key={`unit${unitNumber}-concept-${currentIndex}`} />
        {conceptSections.length > 1 && (
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
              disabled={currentIndex === 0}
            >
              ← Previous
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                setCurrentIndex((i) =>
                  Math.min(i + 1, conceptSections.length - 1)
                )
              }
              disabled={currentIndex === conceptSections.length - 1}
            >
              Next →
            </Button>
          </div>
        )}
        <p className="mt-2 text-muted small">
          Section {currentIndex + 1} of {conceptSections.length}:{" "}
          {conceptSections[currentIndex].name}
        </p>
      </Card.Body>
    </Card>
  );
}

// Unit titles
const unitTitles = {
  1: "Introduction to Greek",
  2: "First declension nouns",
  3: "Second declension nouns, the vocative case and proper nouns",
  4: "Third declension nouns",
  5: "Personal pronouns and relative pronouns",
  6: "More pronouns",
};

export default function UnitPage({ unitNumber }) {
  const [selectedSection, setSelectedSection] = useState(null);

  const subsections = subsectionComponents[unitNumber] || [];
  const Vocab = vocabComponents[unitNumber] || null;
  const unitTitle = unitTitles[unitNumber] || `Unit ${unitNumber}`;

  useEffect(() => {
    setSelectedSection(null);
  }, [unitNumber]);

  // --- Buttons for each section ---
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
    ...(Object.keys(conceptModules).some((path) =>
      getName(path).startsWith(`Unit${unitNumber}_`)
    )
      ? [
          {
            key: "ConceptCheck",
            number: 1000,
            name: "Concept Check",
            Component: () => <ConceptCheckWrapper unitNumber={unitNumber} />,
          },
        ]
      : []),
  ];

  const renderContent = () => {
    if (!selectedSection) return null;
    const Section = selectedSection.Component;
    return Section ? (
      <Card className="mt-4 p-3 shadow-sm border-0">
        <Card.Body>{<Section />}</Card.Body>
      </Card>
    ) : (
      <p>Content not found.</p>
    );
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 display-6">{`Unit ${unitNumber}: ${unitTitle}`}</h2>

      <Row className="g-2 mb-4">
        {buttons.map((btn) => (
          <Col xs="auto" key={btn.key}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setSelectedSection(btn)}
            >
              {btn.number < 999
                ? `Unit ${unitNumber}.${btn.number} ${btn.name.replace(
                    /_/g,
                    " "
                  )}`
                : btn.name.replace(/_/g, " ")}
            </Button>
          </Col>
        ))}
      </Row>

      {renderContent()}
    </Container>
  );
}
