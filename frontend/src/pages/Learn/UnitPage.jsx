import React from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import UnitVocab from "./UnitVocab";
import ConceptCheck from "./ConceptCheck";

// Example subsections
const unitSubsections = {
  Unit1: ["Lesson 1", "Lesson 2"],
  Unit2: ["Lesson 1", "Lesson 2"],
};

export default function UnitPage() {
  const { unitId } = useParams();
  const subsections = unitSubsections[unitId] || [];

  return (
    <div>
      <h2>{unitId}</h2>
      <h3>Subsections</h3>
      <ul>
        {subsections.map((s, idx) => (
          <li key={idx}>
            <Link to={`subsection/${idx}`}>{s}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path="subsection/:subId" element={<p>Lesson content here...</p>} />
        <Route path="vocab" element={<UnitVocab />} />
        <Route path="concept" element={<ConceptCheck />} />
      </Routes>

      <div style={{ marginTop: 20 }}>
        <Link to="vocab">Unit Vocabulary</Link> | <Link to="concept">Concept Check</Link>
      </div>
    </div>
  );
}
