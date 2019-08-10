const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 4000;
const { getPlayerArrestData } = require("./helpers.js");
const { getPlayersFromDatabase } = require("../database/helpers.js");

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.use(morgan("dev"));

app.get("/arrests/:player", (req, res) => {
  getPlayerArrestData(req.params.player)
    .then(({ data: arrests }) => res.send(arrests))
    .catch(err => console.error(err, "Error sending arrest data from server"));
});

app.get("/players", (req, res) => {
  getPlayersFromDatabase((err, data) => {
    if (err) {
      console.error(err, "Error getting players from database");
    } else {
      res.send(data);
    }
  })
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});