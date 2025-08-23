// src/pages/Learn/Vocab/Unit2Vocab.jsx
import React from "react";

export default function Unit2Vocab() {
  const words = [
    { greek: "ἀρχή", gloss: "beginning" },
    { greek: "φωνή", gloss: "voice" },
    { greek: "ἀγάπη", gloss: "love (used especially of divine love)" },
    { greek: "χώρα", gloss: "land, country" },
    { greek: "δόξα", gloss: "glory" },
    { greek: "σοφία", gloss: "wisdom" },
    { greek: "τιμή", gloss: "honor" },
    { greek: "ψυχή", gloss: "soul" },
    { greek: "μάχη", gloss: "battle" },
    { greek: "γραφή", gloss: "writing, scripture" }
  ];

  return (
    <div className="unit-section">
      <h2>Vocabulary – Unit 2</h2>
      <p>Here are some key first-declension nouns:</p>
      <ul className="vocab-list">
        {words.map((word) => (
          <li key={word.greek}>
            <strong>{word.greek}</strong>: {word.gloss}
          </li>
        ))}
      </ul>
    </div>
  );
}
