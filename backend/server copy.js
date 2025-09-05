const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Open SQLite databases
const path = require("path");

const grammarDB = new sqlite3.Database(path.join(__dirname, "db/grammar.db"));
const quizDB = new sqlite3.Database(path.join(__dirname, "db/quiz.db"));

console.log(
  "Using grammar database at:",
  path.join(__dirname, "db/grammar.db")
);
console.log("Using quiz database at:", path.join(__dirname, "db/quiz.db"));

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
// Endpoint: Get quiz questions for a specific unit
app.get("/api/quiz/:unitId", (req, res) => {
  const unitId = parseInt(req.params.unitId, 10);
  console.log("Request for unitId:", unitId);

  const limit = parseInt(req.query.limit, 10) || 20;

  quizDB.all(
    "SELECT * FROM Quiz WHERE unit_id = ? ORDER BY RANDOM() LIMIT ?",
    [unitId, limit],
    (err, rows) => {
      if (err) {
        console.error("DB error:", err.message);
        return res.status(500).json({ error: err.message });
      }
      console.log("Rows fetched:", rows.length, rows);
      res.json(rows);
    }
  );
});

// Use Render’s provided port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
