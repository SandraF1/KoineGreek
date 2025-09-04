import React from "react";

export default function IndefinitePronouns() {
  return (
    <div className="container py-4">
      <main className="row justify-content-center">
        <section className="col-lg-12">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">6.8 Indefinite Pronouns</h2>
              <p>
                Indefinite pronouns mean ‘someone, something’ or ‘a certain
                person/thing’.
              </p>

              <h6>Singular</h6>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Gender</th>
                    <th>Case</th>
                    <th>Form</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Masculine/Feminine Singular */}
                  <tr>
                    <td rowSpan="6">Masculine/Feminine</td>
                    <td>Nominative</td>
                    <td>τις</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τινός</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>τινί</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>τινά</td>
                  </tr>
                  <tr>
                    <td>Nominative</td>
                    <td>τις</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τινός</td>
                  </tr>

                  {/* Neuter Singular */}
                  <tr>
                    <td rowSpan="6">Neuter</td>
                    <td>Nominative</td>
                    <td>τι</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τινός</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>τινί</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>τι</td>
                  </tr>
                  <tr>
                    <td>Nominative</td>
                    <td>τι</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τινός</td>
                  </tr>
                </tbody>
              </table>

              <h6>Plural</h6>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Gender</th>
                    <th>Case</th>
                    <th>Form</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Masculine/Feminine Plural */}
                  <tr>
                    <td rowSpan="6">Masculine/Feminine</td>
                    <td>Nominative</td>
                    <td>τινες</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τινων</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>τισι(ν)</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>τινας</td>
                  </tr>
                  <tr>
                    <td>Nominative</td>
                    <td>τινες</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τινων</td>
                  </tr>

                  {/* Neuter Plural */}
                  <tr>
                    <td rowSpan="6">Neuter</td>
                    <td>Nominative</td>
                    <td>τινα</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τινων</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>τισι(ν)</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>τινα</td>
                  </tr>
                  <tr>
                    <td>Nominative</td>
                    <td>τινα</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τινων</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Note that they are identical in form to the interrogative
                pronouns, except that the indefinite pronouns have either no
                accent or an accent on the second syllable. Like demonstratives,
                they can stand alone or describe a noun. Again, they will match
                the case, gender and number of the noun implied or modified.
              </p>

              <h6>Example (Acts 9:10, SBLGNT)</h6>
              <p>
                Ἦν δέ τις μαθητὴς ἐν Δαμασκῷ, ὀνόματι Ἀνανίας· καὶ εἶπεν κύριος
                ἐν ὀράματι τῷ Ἀνανίᾳ, Ἀνανία.
              </p>
              <p>And there was a certain disciple … (author’s translation)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
