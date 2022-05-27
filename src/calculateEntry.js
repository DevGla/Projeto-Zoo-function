const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((visitantes) => {
    if (visitantes.age < 18) {
      child += 1;
    } if (visitantes.age >= 18 && visitantes.age < 50) {
      adult += 1;
    } if (visitantes.age >= 50) {
      senior += 1;
    }
  });
  return {
    child,
    adult,
    senior,
  };
};

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const h = Object.keys(entrants);
  if (h.length === 0) {
    return 0;
  }
  const priceTotal = countEntrants(entrants);
  return (
    priceTotal.child * data.prices.child
    + priceTotal.adult * data.prices.adult
    + priceTotal.senior * data.prices.senior
  );
}

module.exports = { calculateEntry, countEntrants };
