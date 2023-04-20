const validateGameOne = (req, res, next) => {
  //  id, nombre, descripcion, plataformas, imagen  , fecha_lanzamiento, rating
  const { nombre, descripcion, plataformas, imagen  , fecha_lanzamiento, rating, genre } = req.body.game; // prettier-ignore
  // prettier-ignore
  if ( !nombre || !descripcion || !plataformas || !genre || !imagen || !fecha_lanzamiento || !rating ) {
      return res.status(400).json({ error: "Error en la validación #1, faltan datos" }); // prettier-ignore
    } else {
      next();
    }
};

module.exports = { validateGameOne };
