const axios = require("axios");
const { Videogame } = require("../db");
const KEY = process.env.API_KEY;

const getVideogameByName = async (gameName) => {
  // Obtenemos los juegos de la API RAWG
  console.log(
    "Realizando petición de GAMES por NOMBRE a https://api.rawg.io/api/games?search={game}"
  ); //                                        https://api.rawg.io/api/games?search=sonic&key=6044d5c4de9c4f36819bab66ff942b6c
  const apiGames = await axios
    .get(`https://api.rawg.io/api/games?search=${gameName}&key=${KEY}`)
    .then((response) => response.data);

  // Obtenemos los juegos de la Base local
  console.log("Realizando petición de GAMES por NOMBRE a Base de datos local");
  const dbGames = await Videogame.findAll({ where: { nombre: gameName } });

  // Creamos un objeto que contiene ambos resultados y lo retornamos
  console.log(apiGames);
  const allGames = { apiGames, dbGames };
  return allGames;
};

module.exports = getVideogameByName;
