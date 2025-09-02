import React from "react";

// ThirdDeclensionIntro.jsx
// Bootstrap-styled React component presenting the neuter 3rd-declension paradigm

export default function ThirdDeclensionIntro() {
  return (
    <article className="container mt-4 p-4 border rounded bg-light">
      <header className="mb-3">
        <h1 className="h4">Neuter third-declension paradigm (compact)</h1>
      </header>

      <section className="mb-3">
        <p>
          When memorising the third declension paradigms, you will need to
          memorise the <strong>lexical form</strong> and the{" "}
          <strong>genitive singular form</strong>. This is because the stem can
          be derived from the genitive singular.
        </p>
        <p>
          The third declension endings will often form entirely regularly with
          the third declension endings. The neuter third declension endings are
          below:
        </p>
      </section>

      <section className="mb-3">
        <h2 className="h6">Neuter paradigm (singular &amp; plural)</h2>

        <table className="table table-sm">
          <thead>
            <tr>
              <th>Case</th>
              <th>Form</th>
              <th>Ending</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom./Acc. Sing.</td>
              <td>τὸ πνεῦμα</td>
              <td>-∅ / -ς</td>
            </tr>
            <tr>
              <td>Genitive Sing.</td>
              <td>τοῦ πνεύματος</td>
              <td>-ος</td>
            </tr>
            <tr>
              <td>Dative Sing.</td>
              <td>τῷ πνεύματι</td>
              <td>-ι</td>
            </tr>
            <tr>
              <td>Nom./Acc. Plural</td>
              <td>τὰ πνεύματα</td>
              <td>-α</td>
            </tr>
            <tr>
              <td>Genitive Plural</td>
              <td>τῶν πνευμάτων</td>
              <td>-ων</td>
            </tr>
            <tr>
              <td>Dative Plural</td>
              <td>τοῖς πνεύμασι(ν)</td>
              <td>-σι(ν)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="h6">Why nominative/accusative sing. looks irregular</h3>
        <p>
          You will notice that all the forms are regular and are made by adding
          the ending to the stem. However, the nominative and accusative
          singular seem irregular. They are in fact regular and are formed
          through the process below:
        </p>
        <p className="mb-0">
          πνεῦματ (stem adds nothing because of zero morph ending) → πνεῦματ
          (tau at the end of a word slides off) → πνεῦμα (left with a modified
          stem)
        </p>
      </section>
    </article>
  );
}
