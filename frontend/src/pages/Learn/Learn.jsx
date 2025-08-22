// src/pages/Learn/Learn.jsx
import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import GrammarParser from "../../components/GrammarParser/GrammarParser";
import QuizFlashcards from "../../components/QuizBank/QuizFlashcards";
import Flashcard from "../../components/Flashcards/Flashcard";
import UnitPage from "./UnitPage";


export default function Learn() {
  return (
    <div>
      <h2>Learn</h2>
      <Routes>
        <Route
          path=""
          element={
            <div>
              <h3>All Units</h3>
              <div style={{ display: "flex", gap: 8 }}>
                <Link to="unit/Unit1">Unit 1</Link>
                <Link to="unit/Unit2">Unit 2</Link>
              </div>

              <div style={{ marginTop: 20 }}>
                <h3>Global Resources</h3>
                <div style={{ marginTop: 10 }}>
                  <Link to="flashcards">Vocabulary Flashcards</Link> |{" "}
                  <Link to="grammar">Grammar Parser</Link> |{" "}
                  <Link to="quiz">Quiz Bank</Link>
                </div>
              </div>
            </div>
          }
        />
        <Route path="flashcards" element={<Flashcard />} />
        <Route path="grammar" element={<GrammarParser />} />
        <Route path="quiz" element={<QuizFlashcards />} />

        <Route path="unit/:unitId/*" element={<UnitPage />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </div>
  );
}
