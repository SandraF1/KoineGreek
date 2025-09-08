import React, { useState, useEffect } from "react";
import { Container, Button, Card } from "react-bootstrap";
import UnitPage from "./UnitPage";
import UnitSelector from "../../components/UnitSelector";
import GrammarParser from "../../components/GrammarParser/GrammarParser";
import QuizFlashcards from "../../components/QuizBank/QuizFlashcards";
import {
  unit2Flashcards,
  unit3Flashcards,
  unit4Flashcards,
} from "../../components/Flashcards/DummyCards";

import "./Learn.css"; // Import the new CSS

export default function Learn({ unitIds, setUnitIds }) {
  const [activeSection, setActiveSection] = useState("lesson");
  const [selectedUnit, setSelectedUnit] = useState(1);

  const allUnits = [
    { id: 1, name: "Unit 1", hasContent: true },
    { id: 2, name: "Unit 2", hasContent: true },
    { id: 3, name: "Unit 3", hasContent: true },
    { id: 4, name: "Unit 4", hasContent: true },
    { id: 5, name: "Unit 5", hasContent: true },
    { id: 6, name: "Unit 6", hasContent: true },
  ];

  const allVocabCards = {
    2: unit2Flashcards,
    3: unit3Flashcards,
    4: unit4Flashcards,
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === "lesson") {
      setUnitIds([]);
      if (!selectedUnit) setSelectedUnit(1);
    } else {
      setSelectedUnit(null);
      if (!unitIds || unitIds.length === 0) setUnitIds([1]);
    }
  };

  const sortedUnits = [...unitIds].sort((a, b) => a - b);

  const VocabFlashcards = ({ units }) => {
    const [allCards, setAllCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
      let combined = [];
      units.forEach((id) => {
        if (allVocabCards[id]) combined = combined.concat(allVocabCards[id]);
      });

      if (!combined.length) {
        setAllCards([]);
        setCurrentIndex(0);
        setFlipped(false);
        return;
      }

      combined = combined
        .map((c) => ({ ...c, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort);

      setAllCards(combined);
      setCurrentIndex(0);
      setFlipped(false);
    }, [units]);

    if (!allCards.length)
      return <p>No vocabulary flashcards for selected units.</p>;

    const currentCard = allCards[currentIndex];

    return (
      <Card
        className="text-center mb-3 flashcard"
        onClick={() => setFlipped((f) => !f)}
      >
        <Card.Body>
          {flipped ? (
            <>
              <Card.Title>{currentCard.definition}</Card.Title>
              <Card.Text>{currentCard.example}</Card.Text>
            </>
          ) : (
            <Card.Title>{currentCard.word}</Card.Title>
          )}
        </Card.Body>
        <Card.Footer>
          <Button
            id="voc-flashcards-btn"
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev + 1) % allCards.length);
              setFlipped(false);
            }}
          >
            Next
          </Button>
        </Card.Footer>
      </Card>
    );
  };

  return (
    <Container className="my-4 app-content">
      <h1 className="mb-3 learn-title">Learn</h1>

      {/* Section buttons */}
      <div className="section-buttons">
        {[
          { key: "lesson", label: "Lesson Content" },
          { key: "vocab", label: "Vocabulary Flashcards" },
          { key: "grammar", label: "Grammar Parser" },
          { key: "quiz", label: "Quiz Bank" },
        ].map((s) => (
          <Button
            key={s.key}
            className={activeSection === s.key ? "active" : ""}
            onClick={() => handleSectionClick(s.key)}
          >
            {s.label}
          </Button>
        ))}
      </div>

      {/* Unit selector */}
      <div className="unit-selector-wrapper mb-3">
        <UnitSelector
          units={allUnits}
          selectedUnits={activeSection === "lesson" ? [selectedUnit] : unitIds}
          setSelectedUnits={
            activeSection === "lesson"
              ? (arr) => setSelectedUnit(arr[0])
              : setUnitIds
          }
          singleSelect={activeSection === "lesson"}
        />
      </div>

      {/* Content area */}
      <div className="content-area p-3 border rounded bg-light">
        {activeSection === "lesson" && selectedUnit && (
          <UnitPage unitNumber={selectedUnit} />
        )}

        {activeSection === "lesson" && !selectedUnit && (
          <div className="select-unit-message">
            Please select a unit to begin.
          </div>
        )}

        {activeSection === "vocab" && <VocabFlashcards units={sortedUnits} />}

        {activeSection === "grammar" &&
          sortedUnits.map((unit) => (
            <Card key={unit} className="mb-3 unit-background-card">
              <Card.Header>Unit {unit} Grammar Parser</Card.Header>
              <Card.Body>
                <GrammarParser unit={unit} />
              </Card.Body>
            </Card>
          ))}

        {activeSection === "quiz" &&
          (sortedUnits.length > 0 ? (
            <QuizFlashcards unitIds={sortedUnits} />
          ) : (
            <p>Please select at least one unit to view quiz flashcards.</p>
          ))}
      </div>
    </Container>
  );
}
