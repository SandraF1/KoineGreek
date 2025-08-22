import React, { useEffect, useState } from "react";

export default function GrammarParser({ unitIds }) {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!unitIds || unitIds.length === 0) {
      setRules([]);
      return;
    }
    setLoading(true);

    Promise.all(
      unitIds.map((id) =>
        fetch(`http://localhost:5000/api/grammar/${id}`).then((res) => res.json())
      )
    )
      .then((data) => {
        // Flatten the arrays of rules from multiple units
        setRules(data.flat());
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching grammar:", err);
        setLoading(false);
      });
  }, [unitIds]);

  if (loading) return <p>Loading grammar rules...</p>;
  if (!rules.length) return <p>No grammar rules found for selected units.</p>;

  return (
    <div>
      <h3>Grammar Parser</h3>
      <ul>
        {rules.map((rule) => (
          <li key={rule.id}>
            <strong>{rule.title}:</strong> {rule.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
