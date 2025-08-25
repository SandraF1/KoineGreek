import React, { useEffect, useState } from "react";

export default function QuizFlashcards({ unitIds }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!unitIds || unitIds.length === 0) {
      setQuestions([]);
      return;
    }
    setLoading(true);

    Promise.all(
      unitIds.map((id) =>
        fetch(`https://koinegreek.onrender.com/api/quiz/${id}`).then((res) =>
          res.json()
        )
      )
    )
      .then((data) => {
        setQuestions(data.flat());
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz:", err);
        setLoading(false);
      });
  }, [unitIds]);

  if (loading) return <p>Loading quiz questions...</p>;
  if (!questions.length)
    return <p>No quiz questions found for selected units.</p>;

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
            <p>
              <strong>Q:</strong> {q.question}
            </p>
            <p>
              <strong>A:</strong> {q.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
