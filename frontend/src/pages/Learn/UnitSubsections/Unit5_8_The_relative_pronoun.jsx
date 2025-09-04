// src/pages/Learn/Pronouns/RelativePronouns.jsx
import React from "react";

export default function RelativePronouns() {
  return (
    <div className="unit-section">
      <h2>Relative Pronouns</h2>

      <p>
        A relative pronoun points back to a noun, noun group or even to an
        entire phrase that functions as a whole. The relative pronoun also gives
        more information about the noun, noun group or phrase. In English, we
        have:
      </p>

      <p>
        She is the chef who cooked my meal.
        <br />
        She is the person whom I gave my book to.
      </p>

      <p>
        English relative pronouns sometimes indicate case, but Greek relative
        pronouns indicate gender, number and case. The paradigm is below.
      </p>

      <p class="mb-4">
        Firstly, note the similarities to the first and second declension noun
        endings and the article. As with the personal pronouns, the masculine
        relative pronoun matches the second declension masculine endings, the
        feminine relative pronoun matches the first declension feminine endings
        and the neuter relative pronouns match the neuter article endings.
      </p>
      <p class="mb-4">
        Secondly, note they all begin with a rough breathing. This helps you to
        differentiate from the articles, which mostly begin with a tau.
      </p>
      <p class="mb-4">
        Thirdly, note the accent on the feminine and neuter nominative singular
        relative pronoun. This is the only thing that distinguishes them from
        the feminine and neuter nominative singular articles, which also begin
        with a rough breathing. The masculine nominative singular relative
        pronoun is unique and should not cause confusion.
      </p>

      <p class="mb-4">
        Finally, note some alternative forms of the relative pronouns.
      </p>

      {/* Table 1: Full relative pronoun paradigm */}
      <h3>Full Relative Pronoun Paradigm (MFN)</h3>
      <table border="1" cellSpacing="0" cellPadding="4">
        <thead>
          <tr>
            <th>Case</th>
            <th>Number</th>
            <th>Masculine</th>
            <th>Feminine</th>
            <th>Neuter</th>
          </tr>
        </thead>
        <tbody>
          {/* Singular */}
          <tr>
            <td>Nominative</td>
            <td>Singular</td>
            <td>ὅς / ὅστις</td>
            <td>ἥ / ἥτις</td>
            <td>ὅ</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Singular</td>
            <td>ὅν</td>
            <td>ἥν</td>
            <td>ὅ</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Singular</td>
            <td>οὗ</td>
            <td>ἧς</td>
            <td>οὗ</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Singular</td>
            <td>ᾧ</td>
            <td>ᾗ</td>
            <td>ᾧ</td>
          </tr>

          {/* Plural */}
          <tr>
            <td>Nominative</td>
            <td>Plural</td>
            <td>οἵ / οἵτινες</td>
            <td>αἵ / αἵτινες</td>
            <td>ἅ</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Plural</td>
            <td>οὕς</td>
            <td>ἅς</td>
            <td>ἅ</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Plural</td>
            <td>ὧν</td>
            <td>ὧν</td>
            <td>ὧν</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Plural</td>
            <td>οἷς</td>
            <td>αἷς</td>
            <td>οἷς</td>
          </tr>
        </tbody>
      </table>

      {/* Table 2a: Masculine pronouns vs articles */}
      <h3>Masculine Relative Pronouns vs Articles</h3>
      <table border="1" cellSpacing="0" cellPadding="4">
        <thead>
          <tr>
            <th>Case</th>
            <th>Number</th>
            <th>Relative Pronoun</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nominative</td>
            <td>Singular</td>
            <td>ὅς / ὅστις</td>
            <td>ὁ</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Singular</td>
            <td>ὅν</td>
            <td>τὸν</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Singular</td>
            <td>οὗ</td>
            <td>τοῦ</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Singular</td>
            <td>ᾧ</td>
            <td>τῷ</td>
          </tr>
          <tr>
            <td>Nominative</td>
            <td>Plural</td>
            <td>οἵ / οἵτινες</td>
            <td>οἱ</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Plural</td>
            <td>οὕς</td>
            <td>τοὺς</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Plural</td>
            <td>ὧν</td>
            <td>τῶν</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Plural</td>
            <td>οἷς</td>
            <td>τοῖς</td>
          </tr>
        </tbody>
      </table>

      {/* Table 2b: Feminine pronouns vs articles */}
      <h3>Feminine Relative Pronouns vs Articles</h3>
      <table border="1" cellSpacing="0" cellPadding="4">
        <thead>
          <tr>
            <th>Case</th>
            <th>Number</th>
            <th>Relative Pronoun</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nominative</td>
            <td>Singular</td>
            <td>ἥ / ἥτις</td>
            <td>ἡ</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Singular</td>
            <td>ἥν</td>
            <td>τὴν</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Singular</td>
            <td>ἧς</td>
            <td>τῆς</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Singular</td>
            <td>ᾗ</td>
            <td>τῇ</td>
          </tr>
          <tr>
            <td>Nominative</td>
            <td>Plural</td>
            <td>αἵ / αἵτινες</td>
            <td>αἱ</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Plural</td>
            <td>ἅς</td>
            <td>τὰς</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Plural</td>
            <td>ὧν</td>
            <td>τῶν</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Plural</td>
            <td>αἷς</td>
            <td>ταῖς</td>
          </tr>
        </tbody>
      </table>

      {/* Table 2c: Neuter pronouns vs articles */}
      <h3>Neuter Relative Pronouns vs Articles</h3>
      <table border="1" cellSpacing="0" cellPadding="4">
        <thead>
          <tr>
            <th>Case</th>
            <th>Number</th>
            <th>Relative Pronoun</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nominative</td>
            <td>Singular</td>
            <td>ὅ</td>
            <td>τὸ</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Singular</td>
            <td>ὅ</td>
            <td>τὸ</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Singular</td>
            <td>οὗ</td>
            <td>τοῦ</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Singular</td>
            <td>ᾧ</td>
            <td>τῷ</td>
          </tr>
          <tr>
            <td>Nominative</td>
            <td>Plural</td>
            <td>ἅ</td>
            <td>τὰ</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>Plural</td>
            <td>ἅ</td>
            <td>τὰ</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>Plural</td>
            <td>ὧν</td>
            <td>τῶν</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>Plural</td>
            <td>οἷς</td>
            <td>τοῖς</td>
          </tr>
        </tbody>
      </table>

      <h3>Nom. Singular Relative Pronouns vs Articles (MFN)</h3>
      <table border="1" cellSpacing="0" cellPadding="4">
        <thead>
          <tr>
            <th>Gender</th>
            <th>Relative Pronoun</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Masculine</td>
            <td>ὅς</td>
            <td>ὁ</td>
          </tr>
          <tr>
            <td>Feminine</td>
            <td>ἥ</td>
            <td>ἡ</td>
          </tr>
          <tr>
            <td>Neuter</td>
            <td>ὅ</td>
            <td>τὸ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
