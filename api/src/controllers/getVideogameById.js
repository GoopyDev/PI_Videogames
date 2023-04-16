const axios = require("axios");
const KEY = process.env.API_KEY;

const getVideogameById = async (id) => {
  const obj = await axios
    .get(`https://api.rawg.io/api/games?${id}&key=${KEY}`)
    .then((response) => response.data);
  return obj;
};

module.exports = getVideogameById;
