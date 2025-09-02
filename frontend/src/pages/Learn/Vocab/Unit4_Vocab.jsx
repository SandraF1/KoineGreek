// src/pages/Learn/Vocab/Unit2_3D_Nouns.jsx
import React from "react";

export default function Unit4_3DNouns() {
  const words = [
    {
      article: "ὁ",
      greek: "ἀνήρ",
      genitive: "τοῦ ἀνδρός",
      gloss: "man, husband",
    },
    {
      article: "ἡ",
      greek: "γυνή",
      genitive: "τῆς γυναικός",
      gloss: "woman, wife",
    },
    { article: "ὁ", greek: "πατήρ", genitive: "τοῦ πατρός", gloss: "father" },
    { article: "ἡ", greek: "μήτηρ", genitive: "τῆς μητρός", gloss: "mother" },
    {
      article: "ἡ",
      greek: "σάρξ",
      genitive: "τῆς σαρκός",
      gloss: "flesh, body",
    },
    {
      article: "τὸ",
      greek: "πνεῦμα",
      genitive: "τοῦ πνεύματος",
      gloss: "spirit, wind, breath",
    },

    { article: "ἡ", greek: "χείρ", genitive: "τῆς χειρός", gloss: "hand" },

    { article: "τὸ", greek: "σῶμα", genitive: "τοῦ σώματος", gloss: "body" },
  ];

  return (
    <div className="unit-section">
      <h2>Vocabulary – Third Declension Nouns</h2>
      <p>
        Here are some common third-declension nouns with their articles and
        genitive singular forms:
      </p>
      <table className="table table-bordered vocab-list">
        <thead>
          <tr>
            <th>Article + Nominative</th>
            <th>Genitive Singular</th>
            <th>Gloss</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.greek}>
              <td>
                <strong>
                  {word.article} {word.greek}
                </strong>
              </td>
              <td>{word.genitive}</td>
              <td>{word.gloss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
