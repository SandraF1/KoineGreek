import React from "react";

export default function InteractiveButtons({ onClick }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <button onClick={() => onClick("vocab")}>Vocabulary Flashcards</button>
      <button onClick={() => onClick("grammar")}>Grammar Parser</button>
      <button onClick={() => onClick("quiz")}>Quiz Bank</button>
    </div>
  );
}
