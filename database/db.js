const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const db = new sqlite3.Database(path.join(__dirname, './players.db'), err => {
  if (err) {
    console.error(err, 'ERROR: There was a problem connecting to the players database.');
  } else {
    console.log('Connected to the players database!');
  }
});

const playerSchema =
`CREATE TABLE IF NOT EXISTS players (
  id INTEGER NOT NULL,
  firstName VARCHAR(50) NULL DEFAULT NULL,
  lastName VARCHAR(50) NULL DEFAULT NULL,
  image VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);`

const playerQuery = `INSERT INTO players (firstName, lastName, image) VALUES (?, ?, ?)`

db.serialize(() => {
  db.run(`DROP TABLE IF EXISTS players`);
  db.run(playerSchema);
  const playerStatement = db.prepare(playerQuery);

  for (let i = 0; i < players.length; i++) {
    playerStatement.run();
  }

  playerStatement.finalize();
});


db.close();


module.exports = db;