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
                The possessive pronominal adjective is simply another way to
                express possession, but without using the genitive pronouns.
                Note that there are first and second possessive pronominal
                adjectives, but not the third person. The Greek will use the
                pronouns for the third person, so third person possessive
                pronominal adjectives are not found in the Bible.
              </p>

              <h6>Singular</h6>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Person</th>
                    <th>Masculine</th>
                    <th>Feminine</th>
                    <th>Neuter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1st Person</td>
                    <td>ἐμός, ἐμοῦ, ἐμοί, ἐμόν</td>
                    <td>ἐμή, ἐμῆς, ἐμῇ, ἐμήν</td>
                    <td>ἐμόν, ἐμοῦ, ἐμοί, ἐμόν</td>
                  </tr>
                  <tr>
                    <td>2nd Person</td>
                    <td>σός, σοῦ, σοί, σόν</td>
                    <td>σή, σῆς, σῇ, σήν</td>
                    <td>σόν, σοῦ, σοί, σόν</td>
                  </tr>
                </tbody>
              </table>

              <h6>Plural</h6>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Person</th>
                    <th>Masculine</th>
                    <th>Feminine</th>
                    <th>Neuter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1st Person</td>
                    <td>ἡμέτερος, ἡμετέρου, ἡμετέρῳ, ἡμέτερον</td>
                    <td>ἡμετέρα, ἡμετέρας, ἡμετέρᾳ, ἡμετέραν</td>
                    <td>ἡμέτερον, ἡμετέρου, ἡμετέρῳ, ἡμέτερον</td>
                  </tr>
                  <tr>
                    <td>2nd Person</td>
                    <td>ὑμέτερος, ὑμετέρου, ὑμετέρῳ, ὑμέτερον</td>
                    <td>ὑμετέρα, ὑμετέρας, ὑμετέρᾳ, ὑμετέραν</td>
                    <td>ὑμέτερον, ὑμετέρου, ὑμετέρῳ, ὑμέτερον</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
