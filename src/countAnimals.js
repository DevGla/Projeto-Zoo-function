const data = require('../data/zoo_data');

function countAnimals(animals) {
  const speciee = {};
  if (animals === undefined) {
    data.species.forEach((animal) => {
      speciee[animal.name] = animal.residents.length;
    });
    return speciee;
  }
  const arrayAnimals = Object.values(animals);
  const h = data.species.find((especie) => especie.name === animals.specie).residents;
  if (arrayAnimals.length === 1) {
    return h.length;
  }
  const l = h.filter((elemento) => elemento.sex === arrayAnimals[1]);
  return l.length;
}

console.log(countAnimals());

module.exports = countAnimals;
