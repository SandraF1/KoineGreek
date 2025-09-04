// src/components/PersonalPronounSame.jsx
import React from "react";

export default function PersonalPronounSame() {
  return (
    <div className="unit-section">
      <h2>The Pronoun Meaning ‘Same’</h2>

      <p>
        The third person personal pronoun in some contexts means{" "}
        <strong>‘same’</strong>:
      </p>

      <blockquote className="border-start ps-3">
        <p>
          Ἰησοῦς Χριστὸς ἐχθὲς καὶ σήμερον ὁ αὐτός(Heb 13:3 SBLGNT)
          <br />
          Jesus Christ… the same …. (author’s translation)
        </p>
      </blockquote>

      <p>
        In these cases, the article will usually come directly before the
        pronoun, indicating that it means ‘same’. In cases where the pronoun is
        intensive, the article will usually come before the noun that is
        intensified, if the article is present at all.
      </p>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Usage</th>
            <th>Word Order</th>
            <th>Greek Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>‘Same’</td>
            <td>Article directly precedes the pronoun</td>
            <td>Ἰησοῦς Χριστὸς ὁ αὐτός</td>
          </tr>
          <tr>
            <td>Intensifying</td>
            <td>
              Article directly precedes the intensified noun, or article absent
            </td>
            <td>αὐτὸς δὲ Ἰησοῦς</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
