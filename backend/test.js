const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const quizDB = new sqlite3.Database(path.join(__dirname, "db/quiz.db"));

quizDB.all("SELECT * FROM quiz WHERE unit_id = 3", (err, rows) => {
  if (err) console.error(err);
  else console.log("Unit 3 rows:", rows);
  quizDB.close();
});
