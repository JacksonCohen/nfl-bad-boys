const sqlite3 = require("sqlite3");
const path = require("path");

const getPlayersFromDatabase = (callback) => {
  let db = new sqlite3.Database(path.join(__dirname, "./players.db"), err => {
    if (err) {
      console.error(err);
    } else {
      db.all(`SELECT * FROM players;`, [], (err, rows) => {  
        if (err) {
          console.error("Error querying database for results", err);
        } else {
          db.close(() => { callback(null, rows), console.log("Got players and closed database")});
        }
      });
    }
  });
}

module.exports.getPlayersFromDatabase = getPlayersFromDatabase;