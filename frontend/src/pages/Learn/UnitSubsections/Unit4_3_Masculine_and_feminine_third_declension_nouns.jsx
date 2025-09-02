import React from "react";

// ThirdDeclensionMF.jsx
// Bootstrap-styled React component presenting masculine/feminine 3rd-declension paradigms alongside neuter

export default function ThirdDeclensionMF() {
  return (
    <article className="container mt-4 p-4 border rounded bg-light">
      <div className="text-body">
        <header className="mb-3">
          <h1 className="h4">
            Masculine/Feminine vs Neuter Third-Declension Paradigms
          </h1>
          <p>
            The masculine/feminine third declension endings are very similar to
            the neuter ones. In fact, in the singular, the nominative, genitive
            and dative are identical. In the plural, the genitive and dative are
            identical. Here is the masculine/feminine third declension endings
            paradigm, with the neuter paradigm alongside for comparison:
          </p>
        </header>

        <section className="mb-3">
          <h2 className="h6">Endings comparison</h2>
          <table className="table table-bordered table-sm text-center">
            <thead>
              <tr>
                <th>Case</th>
                <th>Masculine/Feminine</th>
                <th>Neuter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nom. Sing.</td>
                <td>-∅ / -ς</td>
                <td>-∅ / -ς</td>
              </tr>
              <tr>
                <td>Acc. Sing.</td>
                <td>-α</td>
                <td>-∅ / -ς</td>
              </tr>
              <tr>
                <td>Gen. Sing.</td>
                <td>-ος</td>
                <td>-ος</td>
              </tr>
              <tr>
                <td>Dat. Sing.</td>
                <td>-ι</td>
                <td>-ι</td>
              </tr>
              <tr>
                <td>Nom. Plural</td>
                <td>-ες</td>
                <td>-α</td>
              </tr>
              <tr>
                <td>Acc. Plural</td>
                <td>-ας</td>
                <td>-α</td>
              </tr>
              <tr>
                <td>Gen. Plural</td>
                <td>-ων</td>
                <td>-ων</td>
              </tr>
              <tr>
                <td>Dat. Plural</td>
                <td>-σι(ν)</td>
                <td>-σι(ν)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-3">
          <h2 className="h6">Feminine Example: σάρξ</h2>
          <p>
            We will now work through a regular form of the feminine third
            declension noun, which has the following endings:
          </p>
          <table className="table table-sm table-bordered text-center">
            <thead>
              <tr>
                <th>Case</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nom. Sing.</td>
                <td>ἡ σάρξ</td>
              </tr>
              <tr>
                <td>Acc. Sing.</td>
                <td>τὴν σάρκα</td>
              </tr>
              <tr>
                <td>Gen. Sing.</td>
                <td>τῆς σαρκός</td>
              </tr>
              <tr>
                <td>Dat. Sing.</td>
                <td>τῇ σαρκί</td>
              </tr>
              <tr>
                <td>Nom. Plural</td>
                <td>αἱ σάρκες</td>
              </tr>
              <tr>
                <td>Acc. Plural</td>
                <td>τὰς σάρκας</td>
              </tr>
              <tr>
                <td>Gen. Plural</td>
                <td>τῶν σαρκῶν</td>
              </tr>
              <tr>
                <td>Dat. Plural</td>
                <td>ταῖς σαρξί(ν)</td>
              </tr>
            </tbody>
          </table>
          <p>
            The words are all regular if you understand that kappa plus sigma
            gives ksi.
          </p>
        </section>

        <section>
          <h2 className="h6">Masculine Example: ἀνήρ</h2>
          <p>
            Similarly, a regular masculine third declension noun is formed like
            this:
          </p>
          <table className="table table-sm table-bordered text-center">
            <thead>
              <tr>
                <th>Case</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nom. Sing.</td>
                <td>ὁ ἀνήρ</td>
              </tr>
              <tr>
                <td>Acc. Sing.</td>
                <td>τὸν ἄνδρα</td>
              </tr>
              <tr>
                <td>Gen. Sing.</td>
                <td>τοῦ ἀνδρός</td>
              </tr>
              <tr>
                <td>Dat. Sing.</td>
                <td>τῷ ἀνδρί</td>
              </tr>
              <tr>
                <td>Nom. Plural</td>
                <td>οἱ ἄνδρες</td>
              </tr>
              <tr>
                <td>Acc. Plural</td>
                <td>τοὺς ἄνδρας</td>
              </tr>
              <tr>
                <td>Gen. Plural</td>
                <td>τῶν ἀνδρῶν</td>
              </tr>
              <tr>
                <td>Dat. Plural</td>
                <td>τοῖς ἀνδράσι(ν)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Everything about this word looks regular, except the nominative
            singular. In fact, the word was most likely from an ancient form
            spelt ἀνέρ, which then morphed into ἀνήρ and was retained in the
            nominative singular. However, you will memorise this slight
            irregularity and the regular stem as part of learning vocabulary.
          </p>
        </section>
      </div>
    </article>
  );
}
