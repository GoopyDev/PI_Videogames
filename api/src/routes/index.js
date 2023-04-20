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

// *** POST VIDEOGAMES *** //
// Importamos validateGameOne() que verifica que los campos para hacer POST no estén vacíos
// Importamos validateGameTwo() que verifica que los campos Nombre y Descripción no estén ya creados
const { validateGameOne } = require("../controllers/validators/createVideogameValidation1"); // prettier-ignore
const { validateGameTwo } = require("../controllers/validators/createVideogameValidation2"); // prettier-ignore
// prettier-ignore
router.post(`/videogames`, validateGameOne, validateGameTwo, async (req, res) => {
  try {
    const { game } = req.body;
    await createVideogame(game);
    res.status(201).json("Juego creado con éxito");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
