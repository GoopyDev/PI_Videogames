const axios = require("axios");
const KEY = process.env.API_KEY;

const getGenres = async () => {
  const obj = await axios
    .get(`https://api.rawg.io/api/genres?key=${KEY}`)
    .then((response) => response.data);
  return obj;
};

module.exports = getGenres;
