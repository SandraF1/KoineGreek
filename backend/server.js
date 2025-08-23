const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const grammarDB = new sqlite3.Database("./db/grammar.db");

// Return one random grammar item for a unit
app.get("/api/grammar", (req, res) => {
  const unit = parseInt(req.query.unit, 10);
  if (isNaN(unit)) {
    return res.status(400).json({ error: "Invalid unit parameter" });
  }

  grammarDB.all("SELECT * FROM Grammar WHERE unit = ?", [unit], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows || rows.length === 0) return res.json([]);

    const randomItem = rows[Math.floor(Math.random() * rows.length)];
    res.json(randomItem); // return a single item
    console.log("Random item selected:", randomItem);
  });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
