const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { getAllPlayers } = require('../server/helpers.js');

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

  getAllPlayers()
    .then(({data}) => {
    let players = [];
    for (let player of data) {
      players.push([player.FirstName, player.LastName, player.PhotoUrl]);
    }
    return players;
    })
    .then(result => {
      for (let i = 0; i < result.length; i++) {
        playerStatement.run(result[i][0], result[i][1], result[i][2]);
      }
    })
    .then(() => { playerStatement.finalize() })
    .then(() => { db.close() })
});

module.exports = db;