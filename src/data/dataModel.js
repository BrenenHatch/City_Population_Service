const fs = require('fs');
const path = require('path');
const data = {};

const csvFilePath = path.join(__dirname, 'city_populations.csv');

function loadData() {
  fs.readFile(csvFilePath, 'utf8', (err, content) => {
    if (err) {
      console.error('Error loading data:', err);
    } else {
      const lines = content.trim().split('\n');
      lines.forEach((line) => {
        const [city, state, population] = line.split(',');
        const key = `${state.toLowerCase()}/${city.toLowerCase()}`;
        data[key] = parseInt(population);
      });
    }
  });
}

loadData();

function saveData() {
  const lines = [];
  for (const key in data) {
    const [state, city] = key.split('/');
    lines.push(`${city},${state},${data[key]}`);
  }
  const content = lines.join('\n');
  fs.writeFile(csvFilePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Error saving data:', err);
    } else {
      console.log('Data saved successfully');
    }
  });
}

exports.getPopulation = (key) => {
  return data[key] || null;
};

exports.updatePopulation = (key, population) => {
  if (data[key] !== undefined) {
    data[key] = population;
    saveData(); 
    return 'updated';
  } else {
    data[key] = population;
    saveData();
    return 'created';
  }
};