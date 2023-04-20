const { Videogame } = require("../db");
// const { validateGameTwo } = require("./validators/createVideogameValidation2");
const KEY = process.env.API_KEY;

const createVideogame = async (gameData) => {
  const {
    nombre,
    descripcion,
    plataformas,
    imagen,
    fecha_lanzamiento,
    rating,
    genre,
  } = gameData;

  // Segunda validación de los parámetros necesarios para crear un videojuego
  // validateGameTwo(); // Arrojará un error si el juego ya existe. Si no, se avanza con la creación del juego

  const newGame = {
    nombre,
    descripcion,
    plataformas,
    imagen,
    fecha_lanzamiento,
    rating,
    genre,
  };

  return Videogame.create(newGame).then((newVideogame) => {
    console.log("Videojuego creado con éxito");
    return newVideogame.toJSON();
  });
};

module.exports = createVideogame;
