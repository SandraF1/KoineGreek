import React from "react";

export default function InteractiveButtons({ onClick }) {
  return (
    <div>
      <button onClick={() => onClick("vocab")}>Vocabulary Flashcards</button>
      <button onClick={() => onClick("grammar")}>Grammar Parser</button>
      <button onClick={() => onClick("quiz")}>Quiz Bank</button>
    </div>
  );
}
