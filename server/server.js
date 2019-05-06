const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 4000 || process.env.PORT
const { getPlayerArrestData } = require('./helpers.js');

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(morgan('dev'));

app.get('/arrests/:player', (req, res) => {
  getPlayerArrestData(req.params.player)
    // .then(({data}) => console.log('we got data?', Array.isArray(data)))
    .then(({ data: arrests }) => res.send(arrests))
    .catch(err => console.error(err, 'Error sending arrest data from server'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});