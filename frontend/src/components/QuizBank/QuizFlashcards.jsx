// src/components/QuizBank/QuizFlashcards.jsx
import React, { useEffect, useState } from "react";

export default function QuizFlashcards({ unitIds }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    console.log("unitIds prop:", unitIds);

    if (!unitIds || unitIds.length === 0) {
      setQuestions([]);
      return;
    }

    setLoading(true);

    Promise.all(
      unitIds.map((id) =>
        fetch(`http://localhost:5000/api/quiz/${id}`).then((res) => res.json())
      )
    )
      .then((data) => {
        const all = data.flat();
        const shuffled = all
          .map((q) => ({ ...q, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort);

        setQuestions(shuffled);
        setCurrentIndex(0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz:", err);
        setLoading(false);
      });
  }, [unitIds]);

  const nextCard = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  if (loading) return <p>Loading quiz questions...</p>;
  if (!questions.length)
    return <p>No quiz questions found for selected units.</p>;

  const currentCard = questions[currentIndex];

  return (
    <div>
      <h3>Quiz Flashcards</h3>
      <div
        onClick={() => setFlipped((f) => !f)}
        style={{
          border: "1px solid #ccc",
          padding: 20,
          width: 300,
          height: 180,
          borderRadius: 8,
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "1.2em",
          fontFamily: "serif",
          marginBottom: 20,
        }}
      >
        {flipped ? currentCard.answer : currentCard.question}
      </div>

      <button
        onClick={nextCard}
        style={{
          padding: "10px 20px",
          borderRadius: 5,
          border: "none",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
}
