// src/pages/Learn/ConceptCheck/Unit1_ConceptCheck.jsx
import { useState, useEffect } from "react";

export default function Unit1_ConceptCheck() {
  const items = [
    { letter: "α", name: "alpha" },
    { letter: "β", name: "beta" },
    { letter: "γ", name: "gamma" },
    { letter: "δ", name: "delta" },
    { letter: "ε", name: "epsilon" },
    { letter: "ζ", name: "zeta" },
    { letter: "η", name: "eta" },
    { letter: "θ", name: "theta" },
    { letter: "ι", name: "iota" },
    { letter: "κ", name: "kappa" },
    { letter: "λ", name: "lambda" },
    { letter: "μ", name: "mu" },
    { letter: "ν", name: "nu" },
    { letter: "ξ", name: "xi" },
    { letter: "ο", name: "omicron" },
    { letter: "π", name: "pi" },
    { letter: "ρ", name: "rho" },
    { letter: "σ", name: "sigma" },
    { letter: "τ", name: "tau" },
    { letter: "υ", name: "upsilon" },
    { letter: "φ", name: "phi" },
    { letter: "χ", name: "chi" },
    { letter: "ψ", name: "psi" },
    { letter: "ω", name: "omega" },
  ];

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    generateQuestions();
  }, []);

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const generateQuestions = () => {
    const shuffled = shuffle([...items]);
    const selected = shuffled.slice(0, 5); // 5 random questions

    const qs = selected.map((item) => {
      const wrongNames = shuffle(
        items.filter((i) => i.name !== item.name).map((i) => i.name)
      ).slice(0, 2);

      return {
        letter: item.letter,
        options: shuffle([item.name, ...wrongNames]),
        correct: item.name,
      };
    });

    setQuestions(qs);
  };

  const handleSelect = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) s++;
    });
    setScore(s);
  };

  const handleReset = () => {
    setAnswers({});
    setScore(null);
    generateQuestions();
  };

  return (
    <section>
      <h2>Unit 1 Concept Check</h2>
      <p>Select the correct Greek name for each letter:</p>

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "24px", marginBottom: "8px" }}>
            {q.letter}
          </div>
          {q.options.map((opt) => (
            <label key={opt} style={{ display: "block", cursor: "pointer" }}>
              <input
                type="radio"
                name={`question-${i}`}
                value={opt}
                checked={answers[i] === opt}
                onChange={() => handleSelect(i, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit} style={{ marginRight: "10px" }}>
        Submit
      </button>
      <button onClick={handleReset}>Reset</button>

      {score !== null && (
        <p style={{ marginTop: "20px" }}>
          You got {score} out of {questions.length} correct.
        </p>
      )}
    </section>
  );
}
