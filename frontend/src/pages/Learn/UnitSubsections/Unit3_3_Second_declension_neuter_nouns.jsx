import React from "react";

export default function SecondDeclensionNeuter() {
  return (
    <div className="container my-4">
      <h2 className="mb-3">3.3 Second declension neuter nouns</h2>

      <p>
        The second declension neuter nouns and their accompanying article
        decline as follows:
      </p>

      {/* HTML table preserved */}
      <table className="table table-bordered w-auto my-3">
        <tbody>
          <tr>
            <th>Case</th>
            <th>Singular</th>
            <th>Plural</th>
          </tr>
          <tr>
            <td>Nominative</td>
            <td>Το ἐργον</td>
            <td>Τα ἐργα</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Το ἐργον</td>
            <td>Τα ἐργα</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Του ἐργου</td>
            <td>Των ἐργων</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Τῳ ἐργῳ</td>
            <td>Τοις ἐργοις</td>
          </tr>
        </tbody>
      </table>

      <p>Again, observing a few simple rules will aid with memorisation.</p>
      <p>
        Firstly, note that the nominative and accusative singular are identical.
        This is also true for the nominative and accusative plural.
      </p>

      <p>
        Neuter nominative singular: Το ἐργον, Neuter accusative singular: Το
        ἐργον
      </p>
      <p className="mb-4">
        Neuter nominative plural: Τα ἐργα, Neuter accusative plural: Τα ἐργα
      </p>

      <p>
        Secondly, note that the genitive and dative singular and plural are
        identical to their corresponding masculine forms, in terms of the
        article and the noun endings:
      </p>

      <p>
        Second declension neuter genitive singular:{" "}
        <span className="highlight">Του</span> ἐργ
        <span className="highlight">ου</span>
      </p>

      <p>
        Second declension masculine genitive singular:{" "}
        <span className="highlight">Του</span> λογ
        <span className="highlight">ου</span>
      </p>

      <p>
        Second declension neuter genitive plural:{" "}
        <span className="highlight">Των</span> ἐργ
        <span className="highlight">ων</span>
      </p>
      <p>
        Second declension masculine genitive plural:{" "}
        <span className="highlight">Των</span> λογ
        <span className="highlight">ων</span>
      </p>

      <p>
        Second declension neuter dative singular:{" "}
        <span className="highlight">Τῳ</span> ἐργ
        <span className="highlight">ῳ</span>
      </p>

      <p>
        Second declension masculine dative singular:{" "}
        <span className="highlight">Τῳ</span> λογ
        <span className="highlight">ῳ</span>
      </p>

      <p>
        Second declension neuter dative plural:{" "}
        <span className="highlight">Τοις</span> ἐργ
        <span className="highlight">οις</span>
      </p>
      <p className="mb-4">
        Second declension masculine dative plural:{" "}
        <span className="highlight">Τοις</span> λογ
        <span className="highlight">οις</span>
      </p>

      <p>
        Thirdly, note that all the articles begin with a tau and that all the
        articles follow the endings of the nouns, except the nominative and
        accusative singular.
      </p>

      <p>
        Netuer nominative and accusative singular and plural: Το ἐργον, Τ
        <span className="highlight">α</span> ἐργ
        <span className="highlight">α</span>
      </p>

      <p>
        Neuter genitive singular and plural: Τ
        <span className="highlight">ου</span> ἐργ
        <span className="highlight">ου</span>Τ
        <span className="highlight">ων</span> ἐργ
        <span className="highlight">ων</span>
      </p>

      <p>
        Neuter dative singular and plural: Τ<span className="highlight">ῳ</span>{" "}
        ἐργ
        <span className="highlight">ῳ</span>Τ
        <span className="highlight">οις</span> ἐργ
        <span className="highlight">οις</span>
      </p>
    </div>
  );
}
