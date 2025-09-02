import React, { useState, useEffect } from "react";
import { Container, Button, Card } from "react-bootstrap";
import UnitPage from "./UnitPage";
import UnitSelector from "../../components/UnitSelector";
import GrammarParser from "../../components/GrammarParser/GrammarParser";
import QuizFlashcards from "../../components/QuizBank/QuizFlashcards";
import { unit2Flashcards, unit3Flashcards } from "../../components/Flashcards/DummyCards";
//import { unit3Flashcards } from "../components/Flashcards/unit3Flashcards";

export default function Learn({ unitIds, setUnitIds }) {
  const [activeSection, setActiveSection] = useState("lesson");
  const [selectedUnit, setSelectedUnit] = useState(1);

  const allUnits = [
    { id: 1, name: "Unit 1", hasContent: true },
    { id: 2, name: "Unit 2", hasContent: true },
    { id: 3, name: "Unit 3", hasContent: true },
  ];

  const allVocabCards = { 2: unit2Flashcards, 3: unit3Flashcards };

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
        className="text-center mb-3"
        style={{ minHeight: "200px", cursor: "pointer" }}
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
    <Container className="my-4" style={{ marginTop: "70px" }}>
      <h1 className="mb-3">Learn</h1>

      {/* Section buttons */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {[
          { key: "lesson", label: "Lesson Content" },
          { key: "vocab", label: "Vocabulary Flashcards" },
          { key: "grammar", label: "Grammar Parser" },
          { key: "quiz", label: "Quiz Bank" },
        ].map((s) => (
          <Button
            key={s.key}
            variant={activeSection === s.key ? "primary" : "outline-primary"}
            onClick={() => handleSectionClick(s.key)}
          >
            {s.label}
          </Button>
        ))}
      </div>

      {/* Unit selector */}
      <div className="mb-3" style={{ height: "60px" }}>
        <UnitSelector
          units={allUnits}
          selectedUnits={
            activeSection === "lesson"
              ? selectedUnit
                ? [selectedUnit]
                : []
              : unitIds
          }
          setSelectedUnits={
            activeSection === "lesson"
              ? (arr) => setSelectedUnit(arr[0] || null)
              : setUnitIds
          }
          singleSelect={activeSection === "lesson"}
        />
      </div>

      {/* Content area */}
      <div
        className="p-3 border rounded bg-light position-relative"
        style={{
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: activeSection === "vocab" ? "center" : "flex-start",
          overflowY: "auto",
        }}
      >
        {activeSection === "lesson" && (
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ visibility: selectedUnit ? "visible" : "hidden" }}>
              <UnitPage unitNumber={selectedUnit || 1} />
            </div>
            {!selectedUnit && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#6c757d",
                }}
              >
                Please select a unit to begin.
              </div>
            )}
          </div>
        )}

        {activeSection === "vocab" && <VocabFlashcards units={sortedUnits} />}

        {activeSection === "grammar" &&
          sortedUnits.map((unit) => (
            <Card key={unit} className="mb-3">
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
