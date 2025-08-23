import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const router = express.Router();

async function openDb() {
  return open({
    filename: "./grammar.db",
    driver: sqlite3.Database,
  });
}

// Get random word for a unit
router.get("/", async (req, res) => {
  const unit = parseInt(req.query.unit);
  const type = req.query.type; // 'noun' or 'verb'

  const db = await openDb();
  let table = type === "verb" ? "verbs" : "nouns";

  const rows = await db.all(`SELECT * FROM ${table} WHERE unit = ?`, [unit]);

  if (!rows.length) return res.json([]);

  // Random pick
  const index = Math.floor(Math.random() * rows.length);
  res.json(rows[index]);
});

export default router;
