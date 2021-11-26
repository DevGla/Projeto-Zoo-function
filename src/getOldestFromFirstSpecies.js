const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((funcionario) => funcionario.id === id).responsibleFor[0];
  const responsible = data.species.find((animals) => animals.id === employee);
  const { name, sex, age } = responsible.residents.sort((a, b) => b.age - a.age)[0];
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
