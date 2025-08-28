import React, { useState, useEffect } from "react";

export default function GrammarParser({ unit }) {
  const [currentWordRow, setCurrentWordRow] = useState(null);
  const [alternateRows, setAlternateRows] = useState([]);
  const [selected, setSelected] = useState({});
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);

  const nounOptions = {
    case: ["nominative", "accusative", "genitive", "dative"],
    gender: ["masculine", "feminine", "neuter"],
    number: ["singular", "plural"],
  };

  const verbOptions = {
    tense: ["present", "past", "future"],
    voice: ["active", "middle", "passive"],
    mood_subtype: [
      "indicative",
      "subjunctive",
      "imperative",
      "infinitive",
      "participle",
    ],
    person: ["1st", "2nd", "3rd"],
    number: ["singular", "plural"],
  };

  const optionsToUse =
    currentWordRow?.type === "verb" ? verbOptions : nounOptions;

  useEffect(() => {
    fetchWord();
  }, [unit]);

  useEffect(() => {
    if (!currentWordRow) return;
    const initial = {};
    Object.keys(optionsToUse).forEach((k) => (initial[k] = null));
    setSelected(initial);
    setFeedback("");
  }, [currentWordRow]);

  const fetchWord = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/grammar?unit=${unit}`);
      const rows = await res.json();

      if (!rows || rows.length === 0) {
        resetState();
        return;
      }

      const randomRow = rows[Math.floor(Math.random() * rows.length)];
      setCurrentWordRow(randomRow);

      const alternates = rows.filter(
        (r) =>
          r.word === randomRow.word &&
          r.type === randomRow.type &&
          r.id !== randomRow.id
      );
      setAlternateRows(alternates);
      setFeedback("");
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      resetState();
    }
  };

  const resetState = () => {
    setCurrentWordRow(null);
    setAlternateRows([]);
    setLoading(false);
  };

  const handleSelect = (key, value) => {
    setSelected((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
    setFeedback("");
  };

  const getTags = (row) => {
    if (!row) return "";

    if (row.type === "verb") {
      const mood = row.mood_subtype ?? row.mood;
      // Make person required — do not default to 2nd for imperatives
      const person = row.person;

      const parts = [row.tense, row.voice, mood, person, row.number].filter(
        (v) => v !== undefined && v !== null
      );
      return parts.join(" ");
    } else {
      const parts = [row.case, row.gender, row.number].filter(
        (v) => v !== undefined && v !== null
      );
      return parts.join(" ");
    }
  };

  const areTagsEqual = (a, b) => {
    if (!a || !b) return false;
    return a.trim().toLowerCase() === b.trim().toLowerCase();
  };

  const checkAnswer = () => {
    if (!currentWordRow) return;

    const userTags = Object.entries(selected)
      .filter(([_, v]) => Boolean(v))
      .map(([_, v]) => v.toLowerCase())
      .join(" ");

    const validRows = [currentWordRow, ...alternateRows].map(getTags);
    const isCorrect = validRows.some((rowStr) =>
      areTagsEqual(userTags, rowStr)
    );
    const uniqueCorrect = [...new Set(validRows)];

    setFeedback(
      isCorrect
        ? "✅ Correct!"
        : `❌ Incorrect. Correct: ${uniqueCorrect.join(" OR ")}`
    );
  };

  if (loading) return <p>Loading...</p>;
  if (!currentWordRow) return <p>No content for this unit.</p>;

  return (
    <div>
      <h2>
        {currentWordRow.word} ({currentWordRow.type})
      </h2>

      <p>
        <strong>Target form:</strong> {getTags(currentWordRow)}
      </p>

      <p>
        <strong>Expected tags:</strong>{" "}
        {[currentWordRow, ...alternateRows].map(getTags).join(" OR ")}
      </p>

      {Object.keys(optionsToUse).map((key) => (
        <div key={key} style={{ marginBottom: "8px" }}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
          {optionsToUse[key].map((val) => {
            const isSelected = selected[key] === val;
            return (
              <button
                key={val}
                onClick={() => handleSelect(key, val)}
                style={{
                  margin: "2px",
                  padding: "4px 8px",
                  border: "1px solid #333",
                  borderRadius: "4px",
                  cursor: "pointer",
                  backgroundColor: isSelected ? "#4CAF50" : "#fff",
                  color: isSelected ? "#fff" : "#000",
                }}
              >
                {val}
              </button>
            );
          })}
        </div>
      ))}

      <div>
        <button onClick={checkAnswer}>✅ Check Answer</button>
        <button onClick={fetchWord}>🔄 Next</button>
      </div>

      {feedback && <p>{feedback}</p>}
    </div>
  );
}
