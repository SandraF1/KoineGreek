import React, { useEffect, useState } from "react";

export default function GrammarParser() {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/grammar")
      .then((res) => res.json())
      .then((data) => {
        setRules(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching grammar:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading grammar rules...</p>;
  if (!rules.length) return <p>No grammar rules found.</p>;

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
