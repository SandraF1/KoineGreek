import React, { useState, useEffect } from "react";

export default function GrammarParser({ unit }) {
  const [currentWordRows, setCurrentWordRows] = useState([]); // all flexions of the word
  const [currentWord, setCurrentWord] = useState(null); // display word info
  const [selected, setSelected] = useState({});
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWord();
  }, [unit]);

  const fetchWord = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://koinegreek.onrender.com/api/grammar?unit=${Number(unit)}`);
      let rows = await res.json();

      // ensure rows is always an array
      if (!Array.isArray(rows)) rows = rows ? [rows] : [];

      if (rows.length === 0) {
        setCurrentWordRows([]);
        setCurrentWord(null);
        setLoading(false);
        return;
      }

      // group rows by word
      const wordSet = rows.reduce((acc, row) => {
        acc[row.word] = acc[row.word] || [];
        acc[row.word].push(row);
        return acc;
      }, {});

      const words = Object.keys(wordSet);
      const randomWord = words[Math.floor(Math.random() * words.length)];

      setCurrentWordRows(wordSet[randomWord]);
      setCurrentWord({ word: randomWord, type: wordSet[randomWord][0].type });
      setSelected({});
      setFeedback("");
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setCurrentWordRows([]);
      setCurrentWord(null);
      setLoading(false);
    }
  };

  const nounOptions = {
    case: ["nominative", "accusative", "genitive", "dative"],
    gender: ["masculine", "feminine", "neuter"],
    number: ["singular", "plural"],
  };

  const verbOptions = {
    tense: ["present", "past", "future"],
    voice: ["active", "middle", "passive"],
    mood_subtype: ["indicative", "subjunctive", "imperative", "infinitive", "participle"],
    person: ["1st", "2nd", "3rd"],
    number: ["singular", "plural"],
  };

  const optionsToUse = currentWord?.type === "verb" ? verbOptions : nounOptions;

  const handleSelect = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
    setFeedback("");
  };

  const getTags = (row) => {
    if (!row) return [];
    if (row.type === "verb") {
      return [row.tense, row.voice, row.mood_subtype || row.mood, row.person, row.number].filter(Boolean);
    } else {
      return [row.case, row.gender, row.number].filter(Boolean);
    }
  };

  const checkAnswer = () => {
    const userTags = Object.entries(selected)
      .filter(([_, v]) => Boolean(v))
      .map(([_, v]) => v.toLowerCase());

    const isCorrect = currentWordRows.some((row) => {
      const correctTags = getTags(row).map((v) => v.toLowerCase());
      return correctTags.length === userTags.length &&
             correctTags.every((v, i) => v === userTags[i]);
    });

    const correctStrings = currentWordRows.map((row) => getTags(row).join(" "));

    setFeedback(
      isCorrect
        ? "✅ Correct!"
        : `❌ Incorrect. Correct: ${[...new Set(correctStrings)].join(" OR ")}`
    );
  };

  if (loading) return <p>Loading...</p>;
  if (!currentWord) return <p>No content for this unit.</p>;

  const expectedTagsList = [...new Set(currentWordRows.map((row) => getTags(row).join(" ")))];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{currentWord.word} ({currentWord.type})</h2>

      <p>
        <strong>Expected tags:</strong> {expectedTagsList.join(" OR ")}
      </p>

      {Object.keys(optionsToUse).map((key) => (
        <div key={key} style={{ marginBottom: "0.5rem" }}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
          {optionsToUse[key].map((val) => (
            <button
              key={val}
              onClick={() => handleSelect(key, val)}
              style={{
                margin: "0 0.25rem",
                padding: "0.25rem 0.5rem",
                backgroundColor: selected[key] === val ? "#4caf50" : "#eee",
                color: selected[key] === val ? "white" : "black",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {val}
            </button>
          ))}
        </div>
      ))}

      <div style={{ marginTop: "1rem" }}>
        <button onClick={checkAnswer} style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}>
          ✅ Check Answer
        </button>
        <button onClick={fetchWord}>🔄 Next</button>
      </div>

      {feedback && (
        <p
          style={{
            marginTop: "1rem",
            fontWeight: "bold",
            color: feedback.includes("Correct") ? "green" : "red",
          }}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
