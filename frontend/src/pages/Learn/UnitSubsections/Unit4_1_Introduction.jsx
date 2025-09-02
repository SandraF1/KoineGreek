import React from "react";

// ThirdDeclensionIntro.jsx
// A compact React component that presents an introduction to third-declension nouns.
// Bootstrap is used for styling.

export default function ThirdDeclensionIntro() {
  return (
    <article className="container mt-4 p-4 border rounded bg-light">
      <header className="mb-3">
        <h1 className="h4">Introduction to third-declension nouns</h1>
      </header>

      <section>
        <p>
          Third declension nouns can be{" "}
          <strong>masculine, feminine or neuter</strong>. However, in the third
          declension the <em>masculine and feminine</em> nouns share one set of
          endings while the
          <em> neuter</em> nouns use a slightly different set.
        </p>

        <p>
          Because the forms are so similar, it is important to{" "}
          <strong>memorise the article with the lexical form</strong>. The
          article (when present) will indicate the noun's true grammatical
          gender.
        </p>
      </section>
    </article>
  );
}
