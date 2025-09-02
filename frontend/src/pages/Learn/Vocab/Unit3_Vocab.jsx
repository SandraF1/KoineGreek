// src/pages/Learn/Vocab/Unit2_2D_Nouns.jsx
import React from "react";

export default function Unit2_2DNouns() {
  const words = [
    { greek: "λόγος", gloss: "word" },
    { greek: "θεός", gloss: "god, God" },
    { greek: "ἄνθρωπος", gloss: "man, human" },
    { greek: "κύριος", gloss: "lord, master" },
    { greek: "δοῦλος", gloss: "servant, slave" },
    { greek: "ἔργον", gloss: "work, deed" },
    { greek: "δῶρον", gloss: "gift, present" },
    { greek: "παιδίον", gloss: "child" },
    { greek: "πλοῖον", gloss: "ship, boat" },
    { greek: "σημεῖον", gloss: "sign, miracle" },
  ];

  return (
    <div className="unit-section">
      <h2>Vocabulary – Second Declension Nouns</h2>
      <p>Here are some common second-declension masculine and neuter nouns:</p>
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
