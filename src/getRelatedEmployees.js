const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((ids) => ids.managers.find((idds) => idds === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const employe = data.employees.filter((empregado) => empregado.managers.includes(managerId));
    return employe.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
