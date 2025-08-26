const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Open SQLite databases
const grammarDB = new sqlite3.Database("./db/grammar.db");
const quizDB = new sqlite3.Database("./db/quiz.db");

console.log("Using grammar database at:", __dirname + "/db/grammar.db");

// Quick test for unit 3
/* grammarDB.all("SELECT * FROM Grammar WHERE unit = ?", [3], (err, rows) => {
  if (err) {
    console.error("Test query error:", err.message);
  } else {
    console.log("=== TEST: Unit 3 rows ===");
    console.log(rows);
    console.log("=== End of test ===");
  }
}); */

// Health check
app.get("/", (req, res) => res.send("Backend is running!"));

// Endpoint: Get all grammar rows for a unit
app.get("/api/grammar", (req, res) => {
  const unit = parseInt(req.query.unit, 10); // <-- unit is defined here
  if (isNaN(unit))
    return res.status(400).json({ error: "Invalid unit parameter" });

  grammarDB.all("SELECT * FROM Grammar WHERE unit = ?", [unit], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    // LOG HERE, after unit is defined
    //console.log("Rows fetched for unit", unit, rows);

    if (!rows || rows.length === 0) return res.json([]);
    res.json(rows);
  });
});

// Endpoint: Get N random quiz questions
app.get("/api/quiz", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 5;

  quizDB.all(
    "SELECT * FROM Quiz ORDER BY RANDOM() LIMIT ?",
    [limit],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
      console.log(`Returned ${rows.length} quiz questions`);
    }
  );
});

// Use Render’s provided port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
