const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find((animais) => animais.name === animal);
  const olderthan = especie.residents.every((animals) => animals.age >= age);
  return olderthan;
}

module.exports = getAnimalsOlderThan;
