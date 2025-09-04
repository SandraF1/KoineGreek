import React from "react";

export default function FarDemonstrative() {
  return (
    <div className="container py-4">
      <main>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h2 className="h5 mb-3">6.3 The far demonstrative pronoun form</h2>
            <p>
              The far demonstrative is more regular, since its stem does not
              change. It follows the second declension masculine noun endings in
              the masculine, the first declension feminine nouns in the
              feminine, and the neuter article in the neuter. This is similar to
              the personal pronoun endings.
            </p>

            <h6>ἐκεῖνος (that)</h6>

            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>Singular</th>
                  <th>Plural</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Masculine</td>
                  <td>ἐκεῖνος, ἐκείνου, ἐκείνῳ, ἐκεῖνον</td>
                  <td>ἐκεῖνοι, ἐκείνων, ἐκείνοις, ἐκείνους</td>
                </tr>
                <tr>
                  <td>Feminine</td>
                  <td>ἐκείνη, ἐκείνης, ἐκείνῃ, ἐκείνην</td>
                  <td>ἐκεῖναι, ἐκείνων, ἐκείναις, ἐκεῖνας</td>
                </tr>
                <tr>
                  <td>Neuter</td>
                  <td>ἐκεῖνο, ἐκείνου, ἐκείνῳ, ἐκεῖνο</td>
                  <td>ἐκεῖνα, ἐκείνων, ἐκείνοις, ἐκεῖνα</td>
                </tr>
              </tbody>
            </table>

            <h6>
              Comparison: Masculine/Feminine Demonstrative vs. Noun Endings
            </h6>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>Demonstrative Masculine</th>
                  <th>2nd Declension Noun (λόγος)</th>
                  <th>Demonstrative Feminine</th>
                  <th>1st Declension Noun (γῆ)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nominative Sg</td>
                  <td>ἐκεῖνος</td>
                  <td>λόγος</td>
                  <td>ἐκείνη</td>
                  <td>γῆ</td>
                </tr>
                <tr>
                  <td>Accusative Sg</td>
                  <td>ἐκεῖνον</td>
                  <td>λόγον</td>
                  <td>ἐκείνην</td>
                  <td>γῆν</td>
                </tr>
                <tr>
                  <td>Genitive Sg</td>
                  <td>ἐκείνου</td>
                  <td>λόγου</td>
                  <td>ἐκείνης</td>
                  <td>γῆς</td>
                </tr>
                <tr>
                  <td>Dative Sg</td>
                  <td>ἐκείνῳ</td>
                  <td>λόγῳ</td>
                  <td>ἐκείνῃ</td>
                  <td>γῇ</td>
                </tr>
                <tr>
                  <td>Nominative Pl</td>
                  <td>ἐκεῖνοι</td>
                  <td>λόγοι</td>
                  <td>ἐκεῖναι</td>
                  <td>γαῖαι</td>
                </tr>
                <tr>
                  <td>Accusative Pl</td>
                  <td>ἐκεῖνους</td>
                  <td>λόγους</td>
                  <td>ἐκεῖνας</td>
                  <td>γᾶς</td>
                </tr>
                <tr>
                  <td>Genitive Pl</td>
                  <td>ἐκείνων</td>
                  <td>λόγων</td>
                  <td>ἐκείνων</td>
                  <td>γῶν</td>
                </tr>
                <tr>
                  <td>Dative Pl</td>
                  <td>ἐκείνοις</td>
                  <td>λόγοις</td>
                  <td>ἐκείναις</td>
                  <td>γαῖαις</td>
                </tr>
              </tbody>
            </table>

            <h6>Comparison: Neuter Demonstrative vs. Article</h6>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>Demonstrative Neuter</th>
                  <th>Article Neuter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nominative Sg</td>
                  <td>ἐκεῖνο</td>
                  <td>τό</td>
                </tr>
                <tr>
                  <td>Accusative Sg</td>
                  <td>ἐκεῖνο</td>
                  <td>τό</td>
                </tr>
                <tr>
                  <td>Genitive Sg</td>
                  <td>ἐκείνου</td>
                  <td>τοῦ</td>
                </tr>
                <tr>
                  <td>Dative Sg</td>
                  <td>ἐκείνῳ</td>
                  <td>τῷ</td>
                </tr>
                <tr>
                  <td>Nominative Pl</td>
                  <td>ἐκεῖνα</td>
                  <td>τά</td>
                </tr>
                <tr>
                  <td>Accusative Pl</td>
                  <td>ἐκεῖνα</td>
                  <td>τά</td>
                </tr>
                <tr>
                  <td>Genitive Pl</td>
                  <td>ἐκείνων</td>
                  <td>τῶν</td>
                </tr>
                <tr>
                  <td>Dative Pl</td>
                  <td>ἐκεῖνοις</td>
                  <td>τοῖς</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
