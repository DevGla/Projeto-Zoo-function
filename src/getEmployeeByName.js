const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    const employee = data.employees.find(
      (empregado) =>
        empregado.firstName === employeeName
        || empregado.lastName === employeeName,
    );
    return employee;
  }
  return {};
}

module.exports = getEmployeeByName;
