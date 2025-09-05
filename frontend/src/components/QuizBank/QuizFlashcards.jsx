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
        fetch(`https://koinegreek.onrender.com/api/quiz/${id}`).then((res) => res.json())
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
      <div onClick={() => setFlipped((f) => !f)}>
        {flipped ? currentCard.answer : currentCard.question}
      </div>

      <button onClick={nextCard}>Next</button>
    </div>
  );
}
