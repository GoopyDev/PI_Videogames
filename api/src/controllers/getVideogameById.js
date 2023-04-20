const axios = require("axios");
const { Videogame } = require("../db");
const KEY = process.env.API_KEY;

const getVideogameById = async (gameID) => {
  // Obtenemos los juegos de la API RAWG
  console.log(
    "Realizando petición de GAMES a https://api.rawg.io/api/games/ID"
  );
  const apiGames = await axios
    .get(`https://api.rawg.io/api/games/${gameID}?key=${KEY}`)
    .then((response) => response.data);

  // Obtenemos los juegos de la Base local
  console.log("Realizando petición de GAMES a Base de datos local");
  const dbGames = await Videogame.findAll({ where: { id: gameID } });

  // Creamos un objeto que contiene ambos resultados y lo retornamos
  const allGames = { apiGames, dbGames };
  return allGames;
};

module.exports = getVideogameById;
