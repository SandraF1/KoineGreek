// src/pages/Learn/UnitSubsections/Unit1Subsection1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Unit1Subsection1() {
  return (
    <div>
      <h3>Unit 1 - Subsection 1</h3>
      <p>Lesson content goes here...</p>

      <div style={{ marginTop: 20 }}>
        <Link to="../subsection2">Next &gt;</Link>
      </div>
    </div>
  );
}
