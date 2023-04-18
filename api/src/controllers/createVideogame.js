const game = require("../models/Videogame");
const KEY = process.env.API_KEY;

const createVideogame = async (gameData) => {
  const {
    id,
    nombre,
    descripcion,
    plataformas,
    imagen,
    fecha_lanzamiento,
    rating,
  } = gameData;

  if (!id || !nombre || !descripcion || !plataformas)
    throw Error("Faltan datos necesarios para crear el juego");

  const newGame = {
    id,
    nombre,
    descripcion,
    plataformas,
    imagen,
    fecha_lanzamiento,
    rating,
  };
  //   const obj = await axios
  //     .get(`https://api.rawg.io/api/games?key=${KEY}`)
  //     .then((response) => response.data);
  //   return obj;
};

module.exports = createVideogame;
