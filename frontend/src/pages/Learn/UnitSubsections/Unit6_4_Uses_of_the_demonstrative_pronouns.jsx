import React from "react";

export default function DemonstrativeUsage() {
  return (
    <div className="container py-4">
      <main>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h2 className="h5 mb-3">6.4 Uses of Demonstratives</h2>
            <p>
              The demonstratives, near or far, have two uses. In the{" "}
              <strong>pronominal</strong> use, the demonstrative stands in for a
              noun and matches the case, gender, and number of the noun it
              replaces. In the <strong>adjectival</strong> use, it describes a
              noun and agrees with it in case, gender, and number. Note that
              when the demonstrative is used adjectivally, the noun will take an
              article, but the demonstrative will not.
            </p>

            <h6>John 1:7 (SBLGNT)</h6>
            <p>οὗτος ἦλθεν εἰς μαρτυρίαν</p>
            <p>
              <strong>οὗτος</strong> (“this one”) — masculine nominative
              singular — stands in for ἄνθρωπος from John 1:6.
            </p>
            <p>
              It is <strong>pronominal</strong> because the demonstrative
              replaces the noun rather than modifying it.
            </p>

            <h6>Matthew 7:24 (SBLGNT)</h6>
            <p>πᾶς οὖν ὅστις ἀκούει μου τοὺς λόγους τούτους</p>
            <p>
              <strong>τούτους</strong> (“these”) — masculine accusative plural —
              modifies λόγους (“words”).
            </p>
            <p>
              It is <strong>adjectival</strong> because it directly describes
              the noun and agrees with it in case, gender, and number. Notice
              that the noun takes an article, but the demonstrative does not.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
