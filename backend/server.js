const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Grammar parser db
const grammarDB = new sqlite3.Database("./db/grammar.db");
// Quiz bank db
const quizDB = new sqlite3.Database("./db/quiz.db");

// Example grammar parser endpoint
app.get("/api/grammar", (req, res) => {
  grammarDB.all("SELECT * FROM Grammar", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Example quiz bank endpoint
app.get("/api/quiz/:unitId", (req, res) => {
  const { unitId } = req.params;
  quizDB.all("SELECT * FROM Quiz WHERE unit = ?", [unitId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
