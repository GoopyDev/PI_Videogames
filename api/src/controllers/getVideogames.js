const axios = require("axios");
const KEY = process.env.API_KEY;

const getVideogames = async () => {
  const obj = await axios
    .get(`https://api.rawg.io/api/games?key=${KEY}`)
    .then((response) => response.data);
  return obj;
};

module.exports = getVideogames;
