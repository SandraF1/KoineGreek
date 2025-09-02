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
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    generateQuestions();
  }, []);

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const generateQuestions = () => {
    const shuffled = shuffle([...items]);
    const selected = shuffled.slice(0, 5);

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
    setAnswers({});
    setScore(null);
    setChecked(false);
  };

  const handleSelect = (qIndex, option) => {
    if (score === null) setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) s++;
    });
    setScore(s);
    setChecked(true);
  };

  const handleCheck = () => {
    setChecked(true);
  };

  const handleReset = () => {
    generateQuestions();
  };

  const getButtonClass = (q, value, qIndex) => {
    if (!checked) {
      return answers[qIndex] === value
        ? "btn btn-warning me-2 mb-2"
        : "btn btn-outline-primary me-2 mb-2";
    }
    // After checking or submission
    if (value === q.correct) return "btn btn-success me-2 mb-2";
    if (answers[qIndex] === value && value !== q.correct)
      return "btn btn-danger me-2 mb-2";
    return "btn btn-outline-secondary me-2 mb-2";
  };

  return (
    <section className="unit-section container my-4">
      <h2>Unit 1 Concept Check</h2>
      <p>Select the correct Greek name for each letter:</p>

      {questions.map((q, i) => (
        <div key={i} className="mb-3 p-3 border rounded">
          {/* Large Greek letter, left-aligned */}
          <div className="fw-bold mb-3 fs-1">{q.letter}</div>
          {q.options.map((opt) => (
            <button
              key={opt}
              type="button"
              className={getButtonClass(q, opt, i)}
              onClick={() => handleSelect(i, opt)}
              disabled={score !== null}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}

      <div className="mt-3">
        <button
          className="btn btn-info me-2"
          onClick={handleCheck}
          disabled={checked}
        >
          Check Answers
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={handleSubmit}
          disabled={score !== null}
        >
          Submit
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>

      {score !== null && (
        <div className="mt-3 text-center">
          <h3 className="display-5 fw-bold">
            Score: {score} / {questions.length}
          </h3>
        </div>
      )}
    </section>
  );
}
