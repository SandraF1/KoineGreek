// src/components/ThirdPersonPronoun.jsx
import React from "react";

export default function ThirdPersonPronoun() {
  return (
    <div className="unit-section">
      <h2>Third Person Personal Pronoun</h2>

      <p>The paradigm for the third person personal pronoun is below.</p>

      <h3>Third Person Pronoun Paradigm</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Case / Number</th>
            <th>Masculine</th>
            <th>Feminine</th>
            <th>Neuter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nominative Singular</td>
            <td>αὐτός</td>
            <td>αὐτή</td>
            <td>αὐτό</td>
          </tr>
          <tr>
            <td>Accusative Singular</td>
            <td>αὐτόν</td>
            <td>αὐτήν</td>
            <td>αὐτό</td>
          </tr>
          <tr>
            <td>Genitive Singular</td>
            <td>αὐτοῦ</td>
            <td>αὐτῆς</td>
            <td>αὐτοῦ</td>
          </tr>
          <tr>
            <td>Dative Singular</td>
            <td>αὐτῷ</td>
            <td>αὐτῇ</td>
            <td>αὐτῷ</td>
          </tr>
          <tr>
            <td>Nominative Plural</td>
            <td>αὐτοί</td>
            <td>αὐταί</td>
            <td>αὐτά</td>
          </tr>
          <tr>
            <td>Accusative Plural</td>
            <td>αὐτούς</td>
            <td>αὐτάς</td>
            <td>αὐτά</td>
          </tr>
          <tr>
            <td>Genitive Plural</td>
            <td>αὐτῶν</td>
            <td>αὐτῶν</td>
            <td>αὐτῶν</td>
          </tr>
          <tr>
            <td>Dative Plural</td>
            <td>αὐτοῖς</td>
            <td>αὐταῖς</td>
            <td>αὐτοῖς</td>
          </tr>
        </tbody>
      </table>

      <p>
        Firstly, note that the third person personal pronouns distinguish
        between genders. In the Greek text, if a group of people includes both
        men and women, the male plural pronoun is the default.
      </p>

      <p>
        Secondly, note the similarities between the third person personal
        pronoun endings and the first and second declension nouns and articles.
        The male pronouns follow the endings of the second declension masculine
        nouns exactly. The female pronouns follow the endings of the first
        declension feminine nouns exactly. The neuter pronouns follow the
        endings of the second declension neuter nouns exactly.
      </p>

      <h3>Comparison with Regular Nouns</h3>

      <p>Masculine pronouns follow second declension masculine nouns:</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Case / Number</th>
            <th>Masculine Noun (λόγος)</th>
            <th>Masculine Pronoun (αὐτός)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nominative Singular</td>
            <td>ὁ λόγος</td>
            <td>αὐτός</td>
          </tr>
          <tr>
            <td>Accusative Singular</td>
            <td>τὸν λόγον</td>
            <td>αὐτόν</td>
          </tr>
          <tr>
            <td>Genitive Singular</td>
            <td>τοῦ λόγου</td>
            <td>αὐτοῦ</td>
          </tr>
          <tr>
            <td>Dative Singular</td>
            <td>τῷ λόγῳ</td>
            <td>αὐτῷ</td>
          </tr>
          <tr>
            <td>Nominative Plural</td>
            <td>οἱ λόγοι</td>
            <td>αὐτοί</td>
          </tr>
          <tr>
            <td>Accusative Plural</td>
            <td>τοὺς λόγους</td>
            <td>αὐτούς</td>
          </tr>
          <tr>
            <td>Genitive Plural</td>
            <td>τῶν λόγων</td>
            <td>αὐτῶν</td>
          </tr>
          <tr>
            <td>Dative Plural</td>
            <td>τοῖς λόγοις</td>
            <td>αὐτοῖς</td>
          </tr>
        </tbody>
      </table>

      <p>Feminine pronouns follow first declension feminine nouns:</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Case / Number</th>
            <th>Feminine Noun (ἀγάπη)</th>
            <th>Feminine Pronoun (αὐτή)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nominative Singular</td>
            <td>ἡ ἀγάπη</td>
            <td>αὐτή</td>
          </tr>
          <tr>
            <td>Accusative Singular</td>
            <td>τὴν ἀγάπην</td>
            <td>αὐτήν</td>
          </tr>
          <tr>
            <td>Genitive Singular</td>
            <td>τῆς ἀγάπης</td>
            <td>αὐτῆς</td>
          </tr>
          <tr>
            <td>Dative Singular</td>
            <td>τῇ ἀγάπῃ</td>
            <td>αὐτῇ</td>
          </tr>
          <tr>
            <td>Nominative Plural</td>
            <td>αἱ ἀγάπαι</td>
            <td>αὐταί</td>
          </tr>
          <tr>
            <td>Accusative Plural</td>
            <td>τὰς ἀγάπας</td>
            <td>αὐτάς</td>
          </tr>
          <tr>
            <td>Genitive Plural</td>
            <td>τῶν ἀγαπῶν</td>
            <td>αὐτῶν</td>
          </tr>
          <tr>
            <td>Dative Plural</td>
            <td>ταῖς ἀγάπαις</td>
            <td>αὐταῖς</td>
          </tr>
        </tbody>
      </table>

      <p>Neuter pronouns follow second declension neuter nouns:</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Case / Number</th>
            <th>Neuter Noun (παιδίον)</th>
            <th>Neuter Pronoun (αὐτό)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nominative Singular</td>
            <td>τὸ παιδίον</td>
            <td>αὐτό</td>
          </tr>
          <tr>
            <td>Accusative Singular</td>
            <td>τὸ παιδίον</td>
            <td>αὐτό</td>
          </tr>
          <tr>
            <td>Genitive Singular</td>
            <td>τοῦ παιδίου</td>
            <td>αὐτοῦ</td>
          </tr>
          <tr>
            <td>Dative Singular</td>
            <td>τῷ παιδίῳ</td>
            <td>αὐτῷ</td>
          </tr>
          <tr>
            <td>Nominative Plural</td>
            <td>τὰ παιδία</td>
            <td>αὐτά</td>
          </tr>
          <tr>
            <td>Accusative Plural</td>
            <td>τὰ παιδία</td>
            <td>αὐτά</td>
          </tr>
          <tr>
            <td>Genitive Plural</td>
            <td>τῶν παιδίων</td>
            <td>αὐτῶν</td>
          </tr>
          <tr>
            <td>Dative Plural</td>
            <td>τοῖς παιδίοις</td>
            <td>αὐτοῖς</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
