// Esta segunda validación busca en la base de datos si existe el nombre o la descripción del juego
// Si ya existen, impide duplicar estos valores

const { Videogame } = require("../../db");

const validateGameTwo = async (req, res, next) => {
  //  id, nombre, descripcion, plataformas, imagen  , fecha_lanzamiento, rating, genre
  const { nombre, descripcion } = req.body.game; // prettier-ignore

  const nombreHallado = await Videogame.findOne({
    where: { nombre: nombre },
  });
  const descripcionHallada = await Videogame.findOne({
    where: { descripcion: descripcion },
  });

  if (nombreHallado) {
    return res.status(409).json({ error: "Error en la validación #2, ya existe un juego con ese nombre" }); // prettier-ignore
  }
  if (descripcionHallada) {
    return res.status(409).json({ error: "Error en la validación #2, ya existe un juego con esa descripción" }); // prettier-ignore
  }
  next();
};

module.exports = { validateGameTwo };
