import React from "react";

export default function VocativeCaseDeclensionsKoine() {
  return (
    <div className="container my-4">
      <h2 className="mb-3">3.5 Vocative case declensions</h2>

      <p className="mb-2">
        The vocative plural is typically identical to the nominative plural.
      </p>
      <p className="mb-2">
        The vocative singular in the first declension is identical to the
        singular.
      </p>
      <p className="mb-2">
        The vocative singular in the second declension usually has an epsilon
        ending.
      </p>
      <p className="mb-4">
        The vocative singular also occurs in the third declension, which we have
        not yet studied. For completeness, it is usually the stem of the noun,
        with the stem vowel sometime altered. We will note this again when the
        third declension is presented.
      </p>

      <table className="table table-bordered w-auto mb-3">
        <tbody>
          <tr>
            <td colSpan="3">
              <span className="fw-bold">Plural</span>
              <br />
              Vocative = nominative: Κύριοι (nominative and vocative)
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="fw-bold">
              Singular
            </td>
          </tr>
          <tr>
            <th>Declension</th>
            <th>First declension</th>
            <th>Second declension</th>
          </tr>
          <tr>
            <td></td>
            <td>Vocative = nominative: Μαρία (nominative and vocative)</td>
            <td>
              Vocative takes epsilon ending: Κύριος (nominative), Κύριε
              (vocative)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
