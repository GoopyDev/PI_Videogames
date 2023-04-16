const axios = require("axios");
const KEY = process.env.API_KEY;

const getVideogameByName = async (game) => {
  const obj = await axios
    .get(`https://api.rawg.io/api/games?search=${game}&key=${KEY}`)
    .then((response) => response.data);
  return obj;
};

module.exports = getVideogameByName;
