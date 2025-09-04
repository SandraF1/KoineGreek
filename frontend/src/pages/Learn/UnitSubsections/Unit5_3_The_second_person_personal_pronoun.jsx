// src/components/SecondPersonPronoun.jsx
import React from "react";

export default function SecondPersonPronoun() {
  return (
    <div className="unit-section">
      <h2>Second Person Personal Pronoun</h2>

      <p>
        Note that except for the nominative singular, all the second person
        personal endings match exactly the first person pronoun endings. There
        is no differentiation between genders. Also, the singular forms may
        occur with or without their accents.
      </p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Singular</th>
            <th>Plural</th>
            <th>Alternate Forms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>σύ</td>
            <td>ὑμεῖς</td>
            <td>—</td>
          </tr>
          <tr>
            <td>σέ</td>
            <td>ὑμᾶς</td>
            <td>—</td>
          </tr>
          <tr>
            <td>σοῦ</td>
            <td>ὑμῶν</td>
            <td>—</td>
          </tr>
          <tr>
            <td>σοί</td>
            <td>ὑμῖν</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
