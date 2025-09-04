import React from "react";

export default function InterrogativePronouns() {
  return (
    <div className="container py-4">
      <main className="row justify-content-center">
        <section className="col-lg-12">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">6.7 Interrogative Pronouns</h2>
              <p>
                Interrogative pronouns are question words. In English, we say
                ‘Who is that?’ or ‘What is that’? We may also say, ‘To whom did
                you speak?’ English question words do not usually have case
                endings, but Greek interrogatives do and will reflect the
                grammatical role of the thing or person referred to. The
                paradigm below presents the Greek forms for ‘who’ or ‘what’.
                Other question words (where, when and many other interrogatives)
                are not expressed with the words below.
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
                  <tr>
                    <td rowSpan="6">Masculine/Feminine</td>
                    <td>Nominative</td>
                    <td>τίς</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τίνος</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>τίνι</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>τίνα</td>
                  </tr>
                  <tr>
                    <td>Nominative</td>
                    <td>τίς</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τίνος</td>
                  </tr>

                  <tr>
                    <td rowSpan="6">Neuter</td>
                    <td>Nominative</td>
                    <td>τί</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τίνος</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>τίνι</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>τί</td>
                  </tr>
                  <tr>
                    <td>Nominative</td>
                    <td>τί</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τίνος</td>
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
                  <tr>
                    <td rowSpan="6">Masculine/Feminine</td>
                    <td>Nominative</td>
                    <td>τίνες</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τίνων</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>τισι(ν)</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>τίνας</td>
                  </tr>
                  <tr>
                    <td>Nominative</td>
                    <td>τίνες</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τίνων</td>
                  </tr>

                  <tr>
                    <td rowSpan="6">Neuter</td>
                    <td>Nominative</td>
                    <td>τίνα</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τίνων</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>τισι(ν)</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>τίνα</td>
                  </tr>
                  <tr>
                    <td>Nominative</td>
                    <td>τίνα</td>
                  </tr>
                  <tr>
                    <td>Genitive</td>
                    <td>τίνων</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Note that it follows 3rd declension endings in all genders. Note
                also that there is almost always an acute accent over the first
                syllable of each word. This is important because it
                distinguishes the interrogatives from the indefinite pronouns,
                which we will learn next.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
