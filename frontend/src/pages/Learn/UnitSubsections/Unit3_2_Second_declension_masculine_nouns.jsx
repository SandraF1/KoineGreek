import React from "react";
//import './highlight.css'; // Make sure to create this file with the highlight class

export default function SecondDeclensionMasculine() {
  return (
    <div className="container my-4">
      <h2 className="mb-3">3.2 Second declension masculine nouns</h2>

      <p>
        The second declension masculine nouns and their articles are presented
        below:
      </p>

      {/* Table preserved as raw HTML with Bootstrap classes */}
      <table className="table table-bordered w-auto my-3">
        <tbody>
          <tr>
            <th>Case</th>
            <th>Singular</th>
            <th>Plural</th>
          </tr>
          <tr>
            <td>Nominative</td>
            <td>Ό λογος</td>
            <td>Όι λογοι</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Τον λογον</td>
            <td>Του λογους</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Του λογου</td>
            <td>Των λογων</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Τῳ λογῳ</td>
            <td>Τοις λογοις</td>
          </tr>
        </tbody>
      </table>

      <p>
        Noticing several patterns may aid memorisation. Firstly, the genitive
        plural ending in -ων is identical to the genitive plural feminine
        ending. In fact, the neuter genitive plural also shares this ending:
      </p>

      <p>
        First declension feminine genitive plural: των ἀρχ
        <span className="highlight">ων</span>
      </p>
      <p>
        Second declension masculine genitive plural: Των λογ
        <span className="highlight">ων</span>
      </p>
      <p>
        Second declension neuter genitive plural: Των ἐργ
        <span className="highlight">ων</span>
      </p>

      <p>
        Secondly, note that all the articles have endings identical to the noun
        endings, except for the nominative singular.
      </p>

      <p>
        Ό λογος, <span className="highlight"> Όι </span> λογ{" "}
        <span className="highlight">οι</span>
      </p>
      <p>
        Τ<span className="highlight">ον</span> λογ
        <span className="highlight">ον</span>, Τ
        <span className="highlight">ους</span> λογ
        <span className="highlight">ους</span>
      </p>
      <p>
        Τ<span className="highlight">ου</span> λογ
        <span className="highlight">ου</span>, Τ
        <span className="highlight">ων</span> λογ
        <span className="highlight">ων</span>
      </p>
      <p>
        Τ<span className="highlight">ῳ</span> λογ
        <span className="highlight">ῳ</span>, Τ
        <span className="highlight">οις</span> λογ
        <span className="highlight">οις</span>
      </p>

      <p>
        Thirdly, notice that all the articles begin with a tau, except for the
        nominative singular and plural, which start with rough breathings
        instead.
      </p>

      <p>Ό λογος, Όι λογοι</p>
      <p>
        <span className="highlight">Τ</span>ον λογον,{" "}
        <span className="highlight">Τ</span>ου λογους
      </p>
      <p>
        <span className="highlight">Τ</span>ου λογου,{" "}
        <span className="highlight">Τ</span>ων λογων
      </p>
      <p>
        <span className="highlight">Τ</span>ῳ λογῳ,{" "}
        <span className="highlight">Τ</span>οις λογοις
      </p>

      <p>
        Fourth, take note of the iota subscript in the dative singular. This
        also occurs in the first declension and is part of the grammar and
        spelling of the noun. It can never be omitted.
      </p>
      <p>
        Τ<span className="highlight">ῳ</span> λογ
        <span className="highlight">ῳ</span>
      </p>
    </div>
  );
}
