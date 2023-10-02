const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cityPopulationRoutes = require('./routes/cityPopulation/cityPopulation.routes');

app.use(bodyParser.text());

app.use('/api/population', cityPopulationRoutes);

module.exports = app;