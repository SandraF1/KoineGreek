import React from "react";

export default function PossessivePronominalAdjectives() {
  return (
    <div className="container py-4">
      <main className="row justify-content-center">
        <section className="col-lg-12">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">
                6.9 The Possessive Pronominal Adjective
              </h2>

              <p>
                The possessive pronominal adjective expresses possession without
                using the genitive pronouns. First and second person forms
                exist; third person forms use regular pronouns in Greek and are
                not found in the Bible.
              </p>

              <h6>Singular</h6>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Person</th>
                    <th>Case</th>
                    <th>Masculine</th>
                    <th>Feminine</th>
                    <th>Neuter</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      person: "1st Person",
                      caseName: "Nominative",
                      masc: "ἐμός",
                      fem: "ἐμή",
                      neut: "ἐμόν",
                    },
                    {
                      person: "1st Person",
                      caseName: "Genitive",
                      masc: "ἐμοῦ",
                      fem: "ἐμῆς",
                      neut: "ἐμοῦ",
                    },
                    {
                      person: "1st Person",
                      caseName: "Dative",
                      masc: "ἐμοί",
                      fem: "ἐμῇ",
                      neut: "ἐμοί",
                    },
                    {
                      person: "1st Person",
                      caseName: "Accusative",
                      masc: "ἐμόν",
                      fem: "ἐμήν",
                      neut: "ἐμόν",
                    },
                    {
                      person: "2nd Person",
                      caseName: "Nominative",
                      masc: "σός",
                      fem: "σή",
                      neut: "σόν",
                    },
                    {
                      person: "2nd Person",
                      caseName: "Genitive",
                      masc: "σοῦ",
                      fem: "σῆς",
                      neut: "σοῦ",
                    },
                    {
                      person: "2nd Person",
                      caseName: "Dative",
                      masc: "σοί",
                      fem: "σῇ",
                      neut: "σοί",
                    },
                    {
                      person: "2nd Person",
                      caseName: "Accusative",
                      masc: "σόν",
                      fem: "σήν",
                      neut: "σόν",
                    },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td>{row.person}</td>
                      <td>{row.caseName}</td>
                      <td>{row.masc}</td>
                      <td>{row.fem}</td>
                      <td>{row.neut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h6>Plural</h6>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Person</th>
                    <th>Case</th>
                    <th>Masculine</th>
                    <th>Feminine</th>
                    <th>Neuter</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      person: "1st Person",
                      caseName: "Nominative",
                      masc: "ἡμέτερος",
                      fem: "ἡμετέρα",
                      neut: "ἡμέτερον",
                    },
                    {
                      person: "1st Person",
                      caseName: "Genitive",
                      masc: "ἡμετέρου",
                      fem: "ἡμετέρας",
                      neut: "ἡμετέρου",
                    },
                    {
                      person: "1st Person",
                      caseName: "Dative",
                      masc: "ἡμετέρῳ",
                      fem: "ἡμετέρᾳ",
                      neut: "ἡμετέρῳ",
                    },
                    {
                      person: "1st Person",
                      caseName: "Accusative",
                      masc: "ἡμέτερον",
                      fem: "ἡμετέραν",
                      neut: "ἡμέτερον",
                    },
                    {
                      person: "2nd Person",
                      caseName: "Nominative",
                      masc: "ὑμέτερος",
                      fem: "ὑμετέρα",
                      neut: "ὑμέτερον",
                    },
                    {
                      person: "2nd Person",
                      caseName: "Genitive",
                      masc: "ὑμετέρου",
                      fem: "ὑμετέρας",
                      neut: "ὑμετέρου",
                    },
                    {
                      person: "2nd Person",
                      caseName: "Dative",
                      masc: "ὑμετέρῳ",
                      fem: "ὑμετέρᾳ",
                      neut: "ὑμετέρῳ",
                    },
                    {
                      person: "2nd Person",
                      caseName: "Accusative",
                      masc: "ὑμέτερον",
                      fem: "ὑμετέραν",
                      neut: "ὑμέτερον",
                    },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td>{row.person}</td>
                      <td>{row.caseName}</td>
                      <td>{row.masc}</td>
                      <td>{row.fem}</td>
                      <td>{row.neut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
