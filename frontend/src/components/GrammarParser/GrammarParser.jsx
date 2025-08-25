import React, { useState, useEffect } from "react";

export default function GrammarParser({ unit }) {
  const [currentWord, setCurrentWord] = useState(null);
  const [selected, setSelected] = useState({});
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWord();
  }, [unit]);

  const fetchWord = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://koinegreek.onrender.com/api/grammar?unit=${Number(unit)}`
      );
      const word = await res.json();

      if (!word || !word.word) {
        setCurrentWord(null);
        setLoading(false);
        return;
      }

      // Normalize word to display
      const displayWord = word.correct_forms
        ? Array.isArray(word.correct_forms)
          ? typeof word.correct_forms[0] === "string"
            ? word.correct_forms[0]
            : word.correct_forms[0].form || word.word
          : word.correct_forms
        : word.word;

      setCurrentWord({ ...word, displayWord });
      setSelected({});
      setFeedback("");
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setCurrentWord(null);
      setLoading(false);
    }
  };

  const nounOptions = {
    number: ["singular", "plural"],
    case: ["nominative", "accusative", "genitive", "dative"],
    gender: ["masculine", "feminine", "neuter"],
  };

  const verbOptions = {
    person: ["1st", "2nd", "3rd"],
    number: ["singular", "plural"],
    tense: ["present", "past", "future"],
    voice: ["active", "middle", "passive"],
    mood_subtype: ["indicative", "subjunctive", "imperative", "infinitive", "participle"],
  };

  const optionsToUse = currentWord?.type === "verb" ? verbOptions : nounOptions;

  const handleSelect = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
    setFeedback("");
  };

  const checkAnswer = () => {
    const userTags = Object.entries(selected)
      .filter(([_, v]) => Boolean(v))
      .map(([_, v]) => v.toLowerCase())
      .sort();

    let correctTags = [];
    if (currentWord.type === "verb") {
      correctTags = [
        currentWord.person,
        currentWord.number,
        currentWord.tense,
        currentWord.voice,
        currentWord.subtype || currentWord.mood,
      ]
        .filter(Boolean)
        .map((v) => v.toLowerCase());
    } else {
      correctTags = [
        currentWord.noun_case,
        currentWord.number,
        currentWord.gender,
      ]
        .filter(Boolean)
        .map((v) => v.toLowerCase());
    }

    const isCorrect =
      correctTags.length === userTags.length &&
      [...correctTags].sort().every((v, i) => v === userTags.sort()[i]);

    setFeedback(
      isCorrect
        ? "✅ Correct!"
        : `❌ Incorrect. Correct: ${correctTags.join(" ")}`
    );
  };

  if (loading) return <p>Loading...</p>;
  if (!currentWord) return <p>No content for this unit.</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>
        {currentWord.displayWord} ({currentWord.type})
      </h2>

      <p>
        <strong>Expected tags:</strong>{" "}
        {currentWord.type === "verb"
          ? [
              currentWord.person,
              currentWord.number,
              currentWord.tense,
              currentWord.voice,
              currentWord.subtype || currentWord.mood,
            ]
              .filter(Boolean)
              .join(" ")
          : [currentWord.noun_case, currentWord.number, currentWord.gender]
              .filter(Boolean)
              .join(" ")}
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
