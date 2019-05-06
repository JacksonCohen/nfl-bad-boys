const axios = require('axios');

const getPlayerArrestData = (player) => {
  player = player.split(' ').join('%20');
  return axios.get(`http://nflarrest.com/api/v1/player/arrests/${player}`);
}

module.exports.getPlayerArrestData = getPlayerArrestData;