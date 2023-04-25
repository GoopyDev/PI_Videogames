const KEY = process.env.API_KEY;
const axios = require("axios");
const { Videogame } = require("../db");

const getVideogameById = async (gameID, source) => {
  let game = {};

  // Obtenemos los juegos de la API RAWG si el source es "API"
  if (source == "api") {
    console.log("Realizando petición de GAMES a https://api.rawg.io/api/games/ID"); //prettier-ignore
    const apiGames = await axios.get(
      `https://api.rawg.io/api/games/${gameID}?key=${KEY}`
    );
    // .then((response) => response.data);
    game = { ...apiGames.data };
    // Obtenemos los juegos de la Base local si el source es "DATABASE"
  } else if (source == "database") {
    console.log("Realizando petición de GAMES a Base de datos local");
    const dbGames = await Videogame.findAll({ where: { id: gameID } });
    game = dbGames;
  }
  return game;
};

module.exports = getVideogameById;
