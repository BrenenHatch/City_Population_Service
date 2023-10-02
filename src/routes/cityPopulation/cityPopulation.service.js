const dataModel = require('../../data/dataModel');

// Get city population data
exports.getPopulation = (state, city) => {
  const key = `${state.toLowerCase()}/${city.toLowerCase()}`;
  return dataModel.getPopulation(key);
};

// Update city population data
exports.updatePopulation = (state, city, population) => {
  const key = `${state.toLowerCase()}/${city.toLowerCase()}`;
  return dataModel.updatePopulation(key, population);
};