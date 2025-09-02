import React from "react";

export default function ProperNouns() {
  return (
    <div className="container my-4">
      <h2 className="mb-3">3.6 Proper nouns</h2>

      <p>Finally, proper nouns (usually names of people or places) may be:</p>
      <ul className="mb-3">
        <li>Regularly declined according to their family of declensions</li>
        <li>Irregularly declined</li>
        <li>Indeclinable and never change form</li>
      </ul>

      <p>
        Indeclinable nouns may be transliterated from Hebrew. An example is
        Ἀβραάμ.
      </p>
      <p>
        Regularly declined nouns may have been native to or adapted for Greek
        grammar, for example, the name Πέτρος.
      </p>
      <p>
        Irregularly declined nouns also occur, and the most common of this is
        the Greek name of Jesus.
      </p>

      <table className="table table-bordered w-auto my-3">
        <caption className="caption-black">
          Declension of Ἰησοῦς (Jesus) — Singular
        </caption>
        <tbody>
          <tr>
            <th>Case</th>
            <th>Form</th>
          </tr>
          <tr>
            <td>Nominative</td>
            <td>Ἰησοῦς</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Ἰησοῦν</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Ἰησοῦ</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Ἰησοῦ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
