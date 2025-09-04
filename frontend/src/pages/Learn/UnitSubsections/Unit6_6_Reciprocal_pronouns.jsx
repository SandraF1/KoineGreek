import React from "react";

export default function ReciprocalPronouns() {
  return (
    <div className="container py-4">
      <main className="row justify-content-center">
        <section className="col-lg-12">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h5 mb-3">6.6 Reciprocal Pronouns</h2>
              <p>
                The reciprocal pronoun means ‘one another’. It describes
                reciprocity, when two parties act towards each other. Since it
                always refers to at least two parties, it is found only in the
                plural. In Koine Greek, it does not carry gender.
              </p>

              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Case</th>
                    <th>Form</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Genitive</td>
                    <td>ἀλλήλων</td>
                  </tr>
                  <tr>
                    <td>Dative</td>
                    <td>ἀλλήλοις</td>
                  </tr>
                  <tr>
                    <td>Accusative</td>
                    <td>ἀλλήλους</td>
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
