const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids !== undefined) {
    const specie = data.species.filter((elemento) => ids.includes(elemento.id));
    return specie;
  }
  return [];
}

module.exports = getSpeciesByIds;
