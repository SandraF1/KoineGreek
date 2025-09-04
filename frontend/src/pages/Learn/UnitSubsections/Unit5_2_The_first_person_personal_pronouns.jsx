// src/components/FirstPersonPronoun.jsx
import React from "react";

export default function FirstPersonPronoun() {
  return (
    <div className="unit-section">
      <h2>First Person Personal Pronoun</h2>

      <p>
        Note that the genitive singular and plural endings match the genitive
        singular and plural endings of the second declension masculine noun
        endings (like <strong>λόγος</strong>). The first person personal pronoun
        does not differentiate between genders. Also notice the alternate
        singular accusative, genitive, and dative forms with an epsilon in
        front.
      </p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Singular</th>
            <th>Plural</th>
            <th>Alternate Forms</th>
            <th>λόγος Comparison (Gen. Sing/Pl)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ἐγώ</td>
            <td>ἡμεῖς</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>με</td>
            <td>ἡμᾶς</td>
            <td>ἐμέ</td>
            <td></td>
          </tr>
          <tr>
            <td>μου</td>
            <td>ἡμῶν</td>
            <td>—</td>
            <td>λόγου, λόγων</td>
          </tr>
          <tr>
            <td>μοι</td>
            <td>ἡμῖν</td>
            <td>ἐμοί</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
