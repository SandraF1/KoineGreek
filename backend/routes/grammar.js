// backend/routes/grammar.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const router = express.Router();

// Path to your SQLite database
const dbPath = path.join(__dirname, "../db/grammar.db");
const db = new sqlite3.Database(dbPath);

// Get all grammar rules for a unit
router.get("/:unitId", (req, res) => {
  const { unitId } = req.params;
  const query = "SELECT * FROM Grammar WHERE unit = ?";
  db.all(query, [unitId], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows);
  });
});

// Optional: get a specific grammar rule by id
router.get("/:unitId/:ruleId", (req, res) => {
  const { unitId, ruleId } = req.params;
  const query = "SELECT * FROM Grammar WHERE unit = ? AND id = ?";
  db.get(query, [unitId, ruleId], (err, row) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(row);
  });
});

module.exports = router;
