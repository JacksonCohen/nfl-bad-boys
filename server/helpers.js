const axios = require('axios');

const getPlayerArrestData = (player) => {
  player = player.split(' ').join('%20');
  return axios.get(`http://nflarrest.com/api/v1/player/arrests/${player}`);
}

const getAllPlayers = () => {
  return axios.get('https://api.fantasydata.net/api/nfl/fantasy/json/Players?key=d564157917144c268c1517d3d1f96de0');
}

module.exports.getAllPlayers = getAllPlayers;
module.exports.getPlayerArrestData = getPlayerArrestData;