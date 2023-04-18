const { Router } = require("express");
const getVideogames      = require("../controllers/getVideogames"     ); // prettier-ignore
const getVideogameByName = require("../controllers/getVideogameByName"); // prettier-ignore
const getVideogameById   = require("../controllers/getVideogameById"  ); // prettier-ignore
const getGenres          = require("../controllers/getGenres"         ); // prettier-ignore
const createVideogame    = require("../controllers/createVideogame"   ); // prettier-ignore
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/videogames', getVideogames)

router.get(`/videogames`, async (req, res) => {
  try {
    const { gameName } = req.query;
    const games = gameName ? await getVideogameByName(gameName) : await getVideogames(); // prettier-ignore
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/videogames/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let games = await getVideogameById(id);
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get(`/genres`, async (req, res) => {
  try {
    const categorias = await getGenres();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const validationOne = (req, res, next) => {
  //  id, nombre, descripcion, plataformas, imagen  , fecha_lanzamiento, rating
  const { nombre, descripcion, plataformas, imagen  , fecha_lanzamiento, rating, genre } = req.body; // prettier-ignore
  // prettier-ignore
  if ( !nombre || !descripcion || !plataformas || !genre || !imagen || !fecha_lanzamiento || !rating ) {
    return res.status(400).json({ error: "Error en la validación, faltan datos" }); // prettier-ignore
  } else {
    next();
  }
};

router.post(`/videogames`, validationOne, async (req, res) => {
  try {
    const { game } = req.body;
    await createVideogame(game);
    res.status(201).json("Juego creado con éxito");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
