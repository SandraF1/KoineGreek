// server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to grammar.db
const grammarDB = new sqlite3.Database("./db/grammar.db");

// Fetch random grammar item for a unit
app.get("/api/grammar", (req, res) => {
  const unit = parseInt(req.query.unit, 10);

  grammarDB.all(
    "SELECT * FROM Grammar WHERE unit = ?",
    [unit],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || rows.length === 0) return res.json([]); // return empty array
      res.json(rows); // send all rows, frontend will randomize
    }
  );
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
