import React from "react";

export default function ReflexivePronouns() {
  return (
    <div className="container py-4">
      <main>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h2 className="h5 mb-3">6.5 Reflexive Pronouns</h2>

            <p>
              Reflexive pronouns are used when the subject both performs and
              receives the action of the verb. In Greek, masculine and neuter
              reflexives follow second declension endings, while feminine
              reflexives follow first declension endings. Singular pronouns
              differ by person; plural pronouns are the same for all persons.
            </p>

            {/* 1st Person */}
            <h6>1st Person</h6>
            <table className="table table-bordered text-center mb-4">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>Case</th>
                  <th>Singular</th>
                  <th>Plural</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}>Masculine</td>
                  <td>Accusative</td>
                  <td>ἐμαυτόν</td>
                  <td>ἑαυτούς</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>ἐμαυτοῦ</td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>ἐμαυτῷ</td>
                  <td>ἑαυτοῖς</td>
                </tr>

                <tr>
                  <td rowSpan={3}>Feminine</td>
                  <td>Accusative</td>
                  <td>ἐμαυτήν</td>
                  <td>ἑαυτάς</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>ἐμαυτῆς</td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>ἐμαυτῇ</td>
                  <td>ἑαυταῖς</td>
                </tr>

                <tr>
                  <td rowSpan={3}>Neuter</td>
                  <td>Accusative</td>
                  <td>ἐμαυτό</td>
                  <td>ἑαυτά</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>ἐμαυτοῦ</td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>ἐμαυτῷ</td>
                  <td>ἑαυτοῖς</td>
                </tr>
              </tbody>
            </table>

            {/* 2nd Person */}
            <h6>2nd Person</h6>
            <table className="table table-bordered text-center mb-4">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>Case</th>
                  <th>Singular</th>
                  <th>Plural</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}>Masculine</td>
                  <td>Accusative</td>
                  <td>σεαυτόν</td>
                  <td>ἑαυτούς</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>σεαυτοῦ</td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>σεαυτῷ</td>
                  <td>ἑαυτοῖς</td>
                </tr>

                <tr>
                  <td rowSpan={3}>Feminine</td>
                  <td>Accusative</td>
                  <td>σεαυτήν </td>
                  <td>ἑαυτάς</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>σεαυτῆς </td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>σεαυτῇ </td>
                  <td>ἑαυταῖς</td>
                </tr>

                <tr>
                  <td rowSpan={3}>Neuter</td>
                  <td>Accusative</td>
                  <td>σεαυτό </td>
                  <td>ἑαυτά</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>σεαυτοῦ </td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>σεαυτῷ</td>
                  <td>ἑαυτοῖς</td>
                </tr>
              </tbody>
            </table>

            {/* 3rd Person */}
            <h6>3rd Person</h6>
            <table className="table table-bordered text-center mb-4">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>Case</th>
                  <th>Singular</th>
                  <th>Plural</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}>Masculine</td>
                  <td>Accusative</td>
                  <td>ἑαυτόν</td>
                  <td>ἑαυτούς</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>ἑαυτοῦ</td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>ἑαυτῷ</td>
                  <td>ἑαυτοῖς</td>
                </tr>

                <tr>
                  <td rowSpan={3}>Feminine</td>
                  <td>Accusative</td>
                  <td>ἑαυτήν</td>
                  <td>ἑαυτάς</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>ἑαυτῆς</td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>ἑαυτῇ</td>
                  <td>ἑαυταῖς</td>
                </tr>

                <tr>
                  <td rowSpan={3}>Neuter</td>
                  <td>Accusative</td>
                  <td>ἑαυτό</td>
                  <td>ἑαυτά</td>
                </tr>
                <tr>
                  <td>Genitive</td>
                  <td>ἑαυτοῦ</td>
                  <td>ἑαυτῶν</td>
                </tr>
                <tr>
                  <td>Dative</td>
                  <td>ἑαυτῷ</td>
                  <td>ἑαυτοῖς</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
