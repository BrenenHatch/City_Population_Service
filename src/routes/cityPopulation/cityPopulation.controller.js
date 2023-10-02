const cityPopulationService = require('./cityPopulation.service');

// GET city population data
exports.getCityPopulation = (req, res) => {
  const { state, city } = req.params;
  const population = cityPopulationService.getPopulation(state, city);

  if (population === null) {
    res.status(400).json({ error: 'City not found' });
  } else {
    res.status(200).json({ population });
  }
};

// PUT city population data
exports.updateCityPopulation = (req, res) => {
  const { state, city } = req.params;
  const unformattedNumber = req.body;

  const newPopulation = parseFloat(unformattedNumber);

  if (isNaN(newPopulation)) {
    res.status(400).json({ error: 'Invalid population data' });
  }

  const result = cityPopulationService.updatePopulation(state, city, newPopulation);

  if (result === 'created') {
    res.status(201).json({ message: 'Data created successfully' });
  } else if (result === 'updated') {
    res.status(200).json({ message: 'Data updated successfully' });
  } else {
    res.status(400).json({ error: 'City not found' });
  }
};