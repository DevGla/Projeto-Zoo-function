const data = require('../data/zoo_data');

const arrayObj = Object.entries(data.hours);

function monday() {
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}

function obj() {
  const objetos = {};
  arrayObj.forEach((elemento) => {
    let v = `Open from ${elemento[1].open}am until ${elemento[1].close}pm`;
    let e = data.species
      .filter((animal) => animal.availability.includes(elemento[0]))
      .map((nameAnimals) => nameAnimals.name);
    if (elemento[0] === 'Monday') {
      v = 'CLOSED';
      e = 'The zoo will be closed!';
    }
    objetos[elemento[0]] = {
      officeHour: v,
      exhibition: e,
    };
  });
  return objetos;
}

function d(scheduleTarget) {
  const objeto = {};
  arrayObj.forEach((elemento) => {
    if (scheduleTarget === elemento[0]) {
      objeto[elemento[0]] = {
        officeHour: `Open from ${elemento[1].open}am until ${elemento[1].close}pm`,
        exhibition: data.species
          .filter((animal) => animal.availability.includes(elemento[0]))
          .map((nameAnimals) => nameAnimals.name),
      };
    }
  });
  return objeto;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || scheduleTarget === 'qualquercoisa') { return obj(); }
  const animaiss = data.species.find((nameAnimals) => nameAnimals.name === scheduleTarget);
  if (animaiss !== undefined) {
    return data.species.find((elemento) => elemento.name === scheduleTarget).availability;
  }
  if (scheduleTarget === 'Monday') { return monday(); }
  return d(scheduleTarget);
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
