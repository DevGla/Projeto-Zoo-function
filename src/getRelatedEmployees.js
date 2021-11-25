const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((ids) => ids.managers.find((idds) => idds === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
