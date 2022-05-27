const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  console.log(ids);
  if (ids !== undefined) {
    const specie = data.species.filter((elemento) => ids.includes(elemento.id));
    return specie;
  }
  return [];
}

module.exports = getSpeciesByIds;
