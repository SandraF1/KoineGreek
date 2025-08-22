import React, { useEffect, useState } from "react";

export default function QuizFlashcards({ unitId }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!unitId) return; // only fetch if unitId is provided
    fetch(`http://localhost:5000/api/quiz/${unitId}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz:", err);
        setLoading(false);
      });
  }, [unitId]);

  if (!unitId) return <p>Select a unit to see the quiz flashcards.</p>;
  if (loading) return <p>Loading quiz questions...</p>;
  if (!questions.length) return <p>No quiz questions found for this unit.</p>;

  return (
    <div>
      <h3>Quiz Flashcards</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {questions.map((q) => (
          <div
            key={q.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              width: 250,
              borderRadius: 5,
              backgroundColor: "#f9f9f9",
            }}
          >
            <p><strong>Q:</strong> {q.question}</p>
            <p><strong>A:</strong> {q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
