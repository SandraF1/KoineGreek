// backend/routes/quiz.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const router = express.Router();

// Path to your SQLite database
const dbPath = path.join(__dirname, "../db/quiz.db");
const db = new sqlite3.Database(dbPath);

// Get all quiz questions for a unit
router.get("/:unitId", (req, res) => {
  const { unitId } = req.params;
  const query = "SELECT * FROM Quiz WHERE unit = ?";
  db.all(query, [unitId], (err, rows) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(rows);
  });
});

// Optional: get a specific quiz question
router.get("/:unitId/:questionId", (req, res) => {
  const { unitId, questionId } = req.params;
  const query = "SELECT * FROM Quiz WHERE unit = ? AND id = ?";
  db.get(query, [unitId, questionId], (err, row) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(row);
  });
});

module.exports = router;
