const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const grammarDB = new sqlite3.Database(path.join(__dirname, "backend/db/grammar.db"));

grammarDB.all("SELECT COUNT(*) as count FROM Grammar", (err, rows) => {
  if (err) console.error(err);
  else console.log("Rows in Grammar:", rows[0].count);
});
