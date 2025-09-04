import React, { useState, useEffect } from "react";

export default function GrammarParser({ unit }) {
  const [currentWordRow, setCurrentWordRow] = useState(null);
  const [alternateRows, setAlternateRows] = useState([]);
  const [selected, setSelected] = useState({});
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWord();
  }, [unit]);

  useEffect(() => {
    if (!currentWordRow) return;

    // Initialize selected fields based on word type
    const initial = {};
    if (
      currentWordRow.type === "noun" ||
      currentWordRow.type === "pronoun" ||
      currentWordRow.type === "relative-pronoun"
    ) {
      ["case", "gender", "number"].forEach((k) => (initial[k] = null));
    } else if (currentWordRow.type === "verb") {
      ["tense", "voice", "mood_subtype", "person", "number"].forEach(
        (k) => (initial[k] = null)
      );
    }
    setSelected(initial);
    setFeedback("");
  }, [currentWordRow]);

  const fetchWord = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/grammar?unit=${unit}`);
      const rows = await res.json();
      if (!rows || rows.length === 0) {
        setCurrentWordRow(null);
        setAlternateRows([]);
        setLoading(false);
        return;
      }

      const randomRow = rows[Math.floor(Math.random() * rows.length)];
      setCurrentWordRow(randomRow);

      // Gather all DB rows that match the same word as valid alternatives
      const alternates = rows.filter(
        (r) => r.word === randomRow.word && r.id !== randomRow.id
      );
      setAlternateRows(alternates);
      setFeedback("");
      setLoading(false);
    } catch (err) {
      console.error(err);
      setCurrentWordRow(null);
      setAlternateRows([]);
      setLoading(false);
    }
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
      const parts = [
        row.tense,
        row.voice,
        row.mood_subtype,
        row.person,
        row.number,
      ].filter((v) => v);
      return parts.join(" ");
    } else {
      const parts = [row.case, row.gender, row.number].filter((v) => v);
      return parts.join(" ");
    }
  };

  const checkAnswer = () => {
    if (!currentWordRow) return;
    const userTags = Object.entries(selected)
      .filter(([_, v]) => v)
      .map(([_, v]) => v.toLowerCase())
      .join(" ");

    const validAlternatives = [currentWordRow, ...alternateRows].map(getTags);

    const isCorrect = validAlternatives.some(
      (v) => v.toLowerCase() === userTags
    );
    setFeedback(
      isCorrect
        ? "✅ Correct!"
        : `❌ Incorrect. Correct: ${validAlternatives.join(" OR ")}`
    );
  };

  if (loading) return <p>Loading...</p>;
  if (!currentWordRow) return <p>No content for this unit.</p>;

  // Options for selection
  const optionsToUse =
    currentWordRow.type === "verb"
      ? {
          tense: [
            "present",
            "imperfect",
            "future",
            "aorist",
            "perfect",
            "pluperfect",
          ],
          voice: ["active", "middle", "passive"],
          mood_subtype: [
            "indicative",
            "subjunctive",
            "optative",
            "imperative",
            "infinitive",
            "participle",
          ],
          person: ["1st", "2nd", "3rd"],
          number: ["singular", "plural"],
        }
      : {
          case: ["nominative", "accusative", "genitive", "dative"],
          gender: ["masculine", "feminine", "neuter"],
          number: ["singular", "plural"],
        };

  return (
    <div>
      <h2>
        {currentWordRow.word} ({currentWordRow.type})
      </h2>
      <p>
        <strong>Target form:</strong> {getTags(currentWordRow)}
      </p>
      <p>
        <strong>Valid alternatives:</strong>{" "}
        {[currentWordRow, ...alternateRows].map(getTags).join(" OR ")}
      </p>

      {Object.keys(optionsToUse).map((key) => (
        <div key={key} style={{ marginBottom: "8px" }}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
          {optionsToUse[key].map((val) => (
            <button
              key={val}
              onClick={() => handleSelect(key, val)}
              style={{
                margin: "2px",
                padding: "4px 8px",
                border: "1px solid #333",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor: selected[key] === val ? "#4CAF50" : "#fff",
                color: selected[key] === val ? "#fff" : "#000",
              }}
            >
              {val}
            </button>
          ))}
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
