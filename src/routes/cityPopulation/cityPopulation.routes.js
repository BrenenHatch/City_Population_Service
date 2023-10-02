const express = require('express');
const cityPopulationController = require('./cityPopulation.controller');
const router = express.Router();

// GET city population data
router.get('/state/:state/city/:city', cityPopulationController.getCityPopulation);

// PUT city population data
router.put('/state/:state/city/:city', cityPopulationController.updateCityPopulation);

module.exports = router;