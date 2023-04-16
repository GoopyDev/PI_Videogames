const { Router } = require("express");
const getVideogames = require("../controllers/getVideogames");
const getVideogameByName = require("../controllers/getVideogameByName");
const getVideogameById = require("../controllers/getVideogameById");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/videogames', getVideogames)
router.get(`/videogames`, async (req, res) => {
  try {
    const { game } = req.query;
    const games = game ? await getVideogameByName(game) : await getVideogames();
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/videogames/:id", async (req, res) => {
  try {
    let games = await getVideogameById();
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
